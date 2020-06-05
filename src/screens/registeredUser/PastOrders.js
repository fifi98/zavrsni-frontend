import React, { useEffect, useState } from "react";
import MainContainer from "../../components/MainContainer";
import OrderDetails from "../../components/restaurant/OrderDetails";
import OrderRow from "../../components/user/OrderRow";
import api from "../../util/api";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const PastOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState({ items: [] });
  const user = useSelector((state) => state);

  useEffect(() => {
    api.get(`/user/${user.user_id}/orders`).then((response) => {
      console.log(response.data);
      setOrders(response.data.data);
    });
  }, []);

  const handleShowDetails = (order_id) => {
    // Get selected order's details
    api.get(`/restaurant/${user.user_id}/orders/${order_id}`).then((response) => {
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