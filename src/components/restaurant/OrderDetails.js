import React from "react";
import { Table, Modal, Button } from "react-bootstrap";

const OrderDetails = ({ order, shown, onHide, handleServeOrder }) => {
  return (
    <Modal show={shown} onHide={onHide}>
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
            {order.items.map((item) => (
              <tr key={item.item_id}>
                <td>{item.quantity}</td>
                <td>{item.name}</td>
                <td>{item.price} kn</td>
                <td className="text-right">{item.price * item.quantity} kn</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="text-right">
                234 kn
              </td>
            </tr>
          </tfoot>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary" onClick={() => handleServeOrder(order.order_id)}>
          Served
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderDetails;
