import React, { useEffect, useState } from "react";
import API from "../../util/api";
import MainContainer from "../../components/MainContainer";
import { faUtensils, faCheckCircle, faChair } from "@fortawesome/free-solid-svg-icons";
import FoodCard from "../../components/user/FoodCard";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import AddedItems from "../../components/user/AddedItems";
import io from "socket.io-client";
import { Alert, Container, Row, Col, Button, Jumbotron } from "react-bootstrap";
import OrderStatusModal from "../../components/user/OrderStatusModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Orders = (props) => {
  const ORDER = {
    NEW: 0,
    PLACED: 1,
    SERVED: 2,
    RECEIPT_REQUESTED: 3,
    COMPLETED: 4,
  };

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [menuItems, setMenuItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const [addedItems, setAddedItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [socket] = useState(io("http://localhost:8080/", { autoConnect: false }));

  const [orderStatus, setOrderStatus] = useState(ORDER.NEW);
  const [orderID, setOrderID] = useState(0);

  const [confirmed, setConfirmed] = useState(false);
  const [table, setTable] = useState({});

  //Sharing ID stola
  const { tableID } = useParams();

  // Sending the order to the server
  const handleOrder = (event) => {
    // Prepare the message we are going to send to the server
    const orderMessage = {
      table_id: tableID,
      items: [],
    };

    // Add selected items to the message
    orderMessage.items = addedItems.map((item) => ({
      item_id: item.item_id,
      quantity: item.quantity,
    }));

    // If it's a new order, create it and change status
    if (orderStatus === ORDER.NEW) {
      // Send to the server
      socket.emit("order", orderMessage);
      setOrderStatus(ORDER.PLACED);
    }

    //
    if (orderStatus === ORDER.SERVED) {
      // Send the order ID we are updating
      orderMessage.order_id = orderID;
      // Send to the server
      socket.emit("orderUpdate", orderMessage);
      setOrderStatus(ORDER.PLACED);
    }

    setOrderPlaced(true);
  };

  const handleRequestReceipt = () => {
    socket.emit("requestReceipt", { order_id: orderID });
    setOrderStatus(ORDER.RECEIPT_REQUESTED);
  };

  useEffect(() => {
    // Check if current table is occupied
    API.get(`/restaurant/table/${tableID}`).then((result) => {
      setTable(result.data.data);
    });

    socket.connect();

    // When the order has been served
    socket.on("orderServed", (order) => {
      setOrderStatus(ORDER.SERVED);
      setOrderID(order.order_id);
    });

    // When the order is completed
    socket.on("orderComplete", () => {
      setOrderStatus(ORDER.COMPLETED);
    });

    API.get("/restaurant/4/menu/categories").then((result) => {
      setCategories(result.data.data);
      //Select the first category by default
      setSelectedCategory(result.data.data[0].category_id);
    });
  }, []);

  useEffect(() => {
    //Dohvati jela za tu kategoriju
    API.get("/restaurant/4/menu/categories/" + selectedCategory + "/items").then((result) => {
      setMenuItems(result.data.data);
    });
  }, [selectedCategory]);

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(parseInt(event.target.value));
  };

  // Adding or removing an item from the order
  const handleAddItem = (item) => {
    if (addedItems.find((i) => i.item_id === item.item_id)) {
      // Remove the item
      setAddedItems((old) => old.filter((i) => i.item_id !== item.item_id));
    } else {
      // Add the tem
      setAddedItems((old) => [...old, { ...item, quantity: 1 }]);
    }
  };

  if (orderStatus === ORDER.COMPLETED)
    return (
      <div>
        <FontAwesomeIcon icon={faCheckCircle} size={"10x"} />
        <h3>Order completed</h3>
      </div>
    );

  if (!confirmed)
    return (
      <Container>
        <Jumbotron className="justify-content-center" style={{ marginTop: 40 }}>
          <Container className="text-center">
            <FontAwesomeIcon icon={faChair} color="#2F7DF6" size="10x" />
            <br />
            <br />
            <br />
            <h2>Are you at the table {table.label}?</h2>
            <br />
            <br />
            <p>In order to proceed on making an order, please confirm that you are sitting at the table {table.label}.</p>
            <br />
            <p>
              <Button variant="primary" onClick={() => setConfirmed(true)}>
                Yes, I want to make an order
              </Button>
            </p>
          </Container>
        </Jumbotron>
      </Container>
    );

  return (
    <>
      <Navbar {...props} />
      <div className="row dashboard">
        <div className="col-xs-12 col-md-12 col-lg-3">
          {orderPlaced && (
            <Alert variant="success" className="mt-2">
              Order status: <b>Placed</b>
            </Alert>
          )}

          <AddedItems
            addedItems={addedItems}
            handleOrder={handleOrder}
            orderStatus={orderStatus}
            handleRequestReceipt={handleRequestReceipt}
          />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-9">
          <MainContainer icon={faUtensils} title="New order">
            <div className="mt-2 pt-2">
              <div className="btn-group btn-group-toggle mb-3 w-100">
                {categories.map((category) => (
                  <label
                    key={category.category_id}
                    className={"btn btn-outline-secondary " + (category.category_id === selectedCategory ? "active" : "")}
                  >
                    <input
                      type="radio"
                      name="options"
                      value={category.category_id}
                      checked={category.category_id === selectedCategory}
                      onChange={handleCategoryChange}
                    />
                    {category.category}
                  </label>
                ))}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type to search by name"
                  value={searchKeyword}
                  onChange={handleSearchChange}
                />
              </div>
              {menuItems.map(
                (item) =>
                  item.name.toLowerCase().includes(searchKeyword.toLowerCase()) && (
                    <FoodCard
                      item={item}
                      key={item.item_id}
                      onClick={handleAddItem}
                      selected={addedItems.find((i) => i.item_id === item.item_id)}
                    />
                  )
              )}
            </div>
          </MainContainer>
        </div>
      </div>

      <OrderStatusModal orderStatus={orderStatus} />
    </>
  );
};

export default Orders;
