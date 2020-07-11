import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import RestaurantTable from "../../components/restaurant/Table";
import MainContainer from "../../components/ui/MainContainer";
import ServedOrders from "../../components/restaurant/ServedOrders";
import OrderDetails from "../../components/restaurant/OrderDetails";
import NewOrders from "../../components/restaurant/NewOrders";
import api from "../../util/api";
import io from "socket.io-client";
import { useSelector } from "react-redux";

const Restaurant = () => {
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [tables, setTables] = useState([]);
  const [orders, setOrders] = useState([]);
  const [served, setServed] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState({ items: [] });
  const [socket] = useState(io("http://localhost:8080/", { autoConnect: false }));
  const user = useSelector((state) => state);

  // When the page loads
  useEffect(() => {
    socket.connect();

    // Update table status when tableData is received from the server
    socket.on("tableData", (msg) => {
      setTables([...msg]);
      console.log(msg);
    });

    // Show the new order when it's received
    socket.on("order", (msg) => {
      console.log(msg);
      setTables(tables.map((table) => (table.table_name === msg.table_name ? { ...table, status: "Occupied" } : table)));
      setOrders((old) => [...old, msg]);
    });

    // On order update
    socket.on("orderUpdate", (msg) => {
      setOrders((old) => [...old, msg]);
      setServed((old) => old.filter((order) => order.order_id != msg.order_id));
    });

    // On receipt request
    socket.on("requestReceipt", (msg) => {
      setServed((old) =>
        old.map((order) => {
          if ((order.order_id = msg.order_id)) order.requestedReceipt = true;
          return order;
        })
      );
    });

    return () => socket.disconnect();
  }, []);

  // When clicked on an order
  const handleOrderDetails = (order_id) => {
    // Get selected order's details
    api.get(`/restaurant/${user.user_id}/orders/${order_id}`).then((response) => {
      setSelectedOrder(response.data.data);
      setShowOrderDetails(true);
    });
  };

  // When an order is marked as served
  const handleServeOrder = (order_id) => {
    // Send order served message to the server
    socket.emit("orderServed", { order_id });

    // Remove the order from New Orders
    const order = orders.find((o) => o.order_id == order_id);
    setOrders((old) => old.filter((o) => o.order_id !== order.order_id));
    setServed((old) => [...old, order]);

    setShowOrderDetails(false);
  };

  const handlePaidOrder = (order_id) => {
    //
    socket.emit("orderComplete", { order_id });
    setShowOrderDetails(false);
    setServed((old) => old.filter((order) => order.order_id !== order_id));
  };

  return (
    <div>
      <MainContainer icon={faTag} title="Orders">
        <Row className="mt-4 p-2">
          {tables.map((table) => (
            <RestaurantTable key={table.table_id} table={table} />
          ))}
        </Row>
      </MainContainer>

      <Row>
        <Col>
          <NewOrders orders={orders} handleOrderPreparation={handleOrderDetails} />
        </Col>
        <Col>
          <ServedOrders served={served} handleOrderPreparation={handleOrderDetails} />
        </Col>
      </Row>

      <OrderDetails
        order={selectedOrder}
        shown={showOrderDetails}
        onHide={() => setShowOrderDetails(false)}
        handleServeOrder={handleServeOrder}
        handlePaidOrder={handlePaidOrder}
      />
    </div>
  );
};

export default Restaurant;
