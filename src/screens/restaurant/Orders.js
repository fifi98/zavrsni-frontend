import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import RestaurantTable from "../../components/restaurant/Table";
import MainContainer from "../../components/MainContainer";
import ServedOrders from "../../components/restaurant/ServedOrders";
import OrderDetails from "../../components/restaurant/OrderDetails";
import NewOrders from "../../components/restaurant/NewOrders";
import api from "../../util/api";
import io from "socket.io-client";

const Restaurant = () => {
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [tables, setTables] = useState([]);
  const [orders, setOrders] = useState([]);
  const [served, setServed] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState({ items: [] });
  const [socket] = useState(io("http://localhost:8080/", { autoConnect: false }));

  // When the page loads
  useEffect(() => {
    socket.connect();

    // Update table status when tableData is received from the server
    socket.on("tableData", (msg) => setTables([...msg]));

    // Show the new order when it's received
    socket.on("order", (msg) => setOrders((old) => [...old, msg]));
  }, []);

  // When clicked on an order
  const handleOrderDetails = (order_id) => {
    // Get selected order's details
    api.get(`/restaurant/4/orders/${order_id}`).then((response) => {
      setSelectedOrder(response.data.data);
      setShowOrderDetails(true);
    });
  };

  // When an order is marked as served
  const handleServeOrder = (order_id) => {
    // Send order served message to the server
    socket.emit("orderServed", { order_id: order_id });

    // Remove the order from New Orders
    const order = orders.find((o) => o.order_id == order_id);
    setOrders((old) => old.filter((o) => o.order_id !== order.order_id));
    setServed((old) => [...old, order]);

    setShowOrderDetails(false);
  };

  return (
    <div>
      <MainContainer icon={faTag} title="Orders">
        <div className="row mt-4 p-2">
          {tables.map((table) => (
            <RestaurantTable key={table.table_id} table={table} />
          ))}
        </div>
      </MainContainer>

      <Row>
        <Col>
          <NewOrders orders={orders} handleOrderPreparation={handleOrderDetails} />
        </Col>
        <Col>
          <ServedOrders served={served} />
        </Col>
      </Row>

      <OrderDetails
        order={selectedOrder}
        shown={showOrderDetails}
        onHide={() => setShowOrderDetails(false)}
        handleServeOrder={handleServeOrder}
      />
    </div>
  );
};

export default Restaurant;
