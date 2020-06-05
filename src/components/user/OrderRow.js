import React from "react";
import moment from "moment";
import { Button } from "react-bootstrap";

const OrderRow = ({ order, handleShowDetails }) => {
  return (
    <tr className="border-bottom border-gray">
      <td>{moment(order.date_time).format("MMM Do, H:mm:ss")}</td>
      <td>{order.restaurant}</td>
      <td>{order.total} kn</td>

      <td className="text-right">
        <Button size="sm" onClick={() => handleShowDetails(order.order_id)}>
          Details
        </Button>
      </td>
    </tr>
  );
};

export default OrderRow;
