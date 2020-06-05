import React, { useEffect, useState } from "react";
import API from "../../util/api";
import MainContainer from "../../components/MainContainer";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import FoodCard from "../../components/user/FoodCard";
import Navbar from "../../components/Navbar";
import AddedItems from "../../components/user/AddedItems";
import io from "socket.io-client";
import OrderStatusModal from "../../components/user/OrderStatusModal";
import TableConfirmation from "../../components/user/TableConfirmation";
import OrderConfirmation from "../../components/user/OrderConfirmation";
import TableOccupied from "../../components/user/TableOccupied";
import { useSelector } from "react-redux";

const Orders = (props) => {
  const ORDER = {
    CANCELED: -1,
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
  const [socket] = useState(io("http://localhost:8080/", { autoConnect: false }));

  const [orderStatus, setOrderStatus] = useState(ORDER.NEW);
  const [orderID, setOrderID] = useState(0);
  const [orderItems, setOrderItems] = useState([]);

  const [confirmed, setConfirmed] = useState(false);
  const [table, setTable] = useState({});

  const user = useSelector((state) => state);

  //Sharing ID stola
  const { tableID } = useParams();

  // Sending the order to the server
  const handleOrder = (event) => {
    // Prepare the message we are going to send to the server
    const orderMessage = {
      table_id: tableID,
      customer_id: user.user_id,
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

    // Add new items to the order
    setOrderItems((old) => [...old, ...addedItems]);
    setAddedItems([]);
  };

  const handleRequestReceipt = () => {
    socket.emit("requestReceipt", { order_id: orderID });
    setOrderStatus(ORDER.RECEIPT_REQUESTED);
  };

  useEffect(() => {
    // Check if current table is occupied
    API.get(`/restaurant/table/${tableID}`).then((result) => {
      if (result.data.data.status_id !== 1) {
        // Table is occupied
        setOrderStatus(ORDER.CANCELED);
        return;
      }

      setTable(result.data.data);

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
  const handleAddItem = (event, item) => {
    // Do not fire the event if clicked on quantity input
    if (event.target.type === "number") return;

    if (addedItems.find((i) => i.item_id === item.item_id)) {
      // Remove the item
      setAddedItems((old) => old.filter((i) => i.item_id !== item.item_id));
    } else {
      // Add the tem
      setAddedItems((old) => [...old, { ...item, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (itemId, quantity) => {
    setAddedItems(addedItems.map((item) => (item.item_id === itemId ? { ...item, quantity: quantity } : item)));
  };

  // If the table is occupied, the order is canceled
  if (orderStatus === ORDER.CANCELED) return <TableOccupied />;

  // When the order is completed
  if (orderStatus === ORDER.COMPLETED) return <OrderConfirmation />;

  // When user opens the web page ask him to confirm he is sitting at the right table
  if (!confirmed) return <TableConfirmation table={table} setConfirmed={setConfirmed} />;

  return (
    <>
      <Navbar {...props} />
      <div className="row dashboard">
        <div className="col-xs-12 col-md-12 col-lg-3">
          {/* {orderPlaced && (
            <Alert variant="success" className="mt-2">
              Order status: <b>Placed</b>
            </Alert>
          )} */}

          <AddedItems
            orderItems={orderItems}
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
                      addedItems={addedItems}
                      onClick={handleAddItem}
                      handleQuantityChange={handleQuantityChange}
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
