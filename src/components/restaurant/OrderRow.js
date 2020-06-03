import React from "react";
import moment from "moment";
import { Button } from "react-bootstrap";

const OrderRow = ({ order, handleShowDetails }) => {
  console.log(order);
  return (
    <tr className="border-bottom border-gray">
      <td>#{order.order_id}</td>
      <td>{moment(order.date_time).format("MMM Do, H:mm:ss")}</td>
      <td>{order.table_label}</td>
      <td>{order.customer === null ? "Guest" : order.customer}</td>

      <td className="text-right">
        <Button size="sm" onClick={() => handleShowDetails(order.order_id)}>
          Details
        </Button>
      </td>
    </tr>
  );
};

export default OrderRow;
