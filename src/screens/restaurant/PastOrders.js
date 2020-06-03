import React, { useEffect, useState } from "react";
import MainContainer from "../../components/MainContainer";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import api from "../../util/api";
import OrderRow from "../../components/restaurant/OrderRow";
import { Table } from "react-bootstrap";
import OrderDetails from "../../components/restaurant/OrderDetails";

const PastOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState({ items: [] });

  useEffect(() => {
    api.get(`/restaurant/4/orders`).then((response) => setOrders(response.data.data));
  }, []);

  const handleShowDetails = (order_id) => {
    // Get selected order's details
    api.get(`/restaurant/4/orders/${order_id}`).then((response) => {
      setSelectedOrder(response.data.data);
    });
  };

  const handleHideDetails = () => {
    setSelectedOrder({ items: [] });
  };

  return (
    <MainContainer icon={faClipboardCheck} title="Past Orders">
      <Table hover borderless>
        <tbody>
          {orders.map((order) => (
            <OrderRow order={order} handleShowDetails={handleShowDetails} />
          ))}
        </tbody>
      </Table>

      <OrderDetails order={selectedOrder} shown={selectedOrder.items.length !== 0} onHide={handleHideDetails} />
    </MainContainer>
  );
};

export default PastOrders;
