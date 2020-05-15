import React, { useEffect, useState } from "react";
import RestaurantTable from "../../components/restaurant/Table";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import MainContainer from "../../components/MainContainer";
import io from "socket.io-client";
import { Table, Modal, Button, Row, Col } from "react-bootstrap";
import api from "../../util/api";
import Order from "../../components/restaurant/Order";
import NewOrders from "../../components/restaurant/NewOrders";
import ServedOrders from "../../components/restaurant/ServedOrders";

const Restaurant = (props) => {
  let socket = io("http://localhost:8080/", {
    autoConnect: false,
  });

  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [tables, setTables] = useState([]);
  const [orders, setOrders] = useState([]);
  const [served, setServed] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState([]);

  // When the page loads
  useEffect(() => {
    socket.connect();

    // Update table status when tableData is received from the server
    socket.on("tableData", (msg) => setTables([...msg]));

    // Show the new order when it's received
    socket.on("order", (msg) => setOrders((old) => [...old, msg]));
  }, []);

  // When clicked on an order
  const handleOrderPreparation = (order_id) => {
    // Get selected order's details
    api.get(`/restaurant/4/orders/${order_id}`).then((response) => {
      setSelectedOrder(response.data.data);
      setShowOrderDetails(true);
    });
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
          <NewOrders orders={orders} handleOrderPreparation={handleOrderPreparation} />
        </Col>
        <Col>
          <ServedOrders served={served} />
        </Col>
      </Row>

      <Modal show={showOrderDetails} onHide={() => setShowOrderDetails(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order details for table T1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table responsive>
            <thead>
              <tr>
                <th>Q</th>
                <th>Item</th>
                <th>Price</th>
                <th className="text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {selectedOrder.map((item) => (
                <tr>
                  <td>{item.quantity}</td>
                  <td>{item.name}</td>
                  <td>{item.price} kn</td>
                  <td className="text-right">{item.price * item.quantity} kn</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4" className="text-right">
                  234 kn
                </td>
              </tr>
            </tfoot>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Served</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Restaurant;
