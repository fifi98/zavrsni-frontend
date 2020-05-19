import React from "react";
import { Table, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConciergeBell, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const OrderDetails = ({ order, shown, onHide, handleServeOrder, handlePaidOrder }) => {
  return (
    <Modal size="lg" show={shown} onHide={onHide}>
      <Modal.Body>
        <Table responsive>
          <thead style={{ borderTop: "hidden" }}>
            <tr>
              <th>Q</th>
              <th>Item</th>
              <th>Price</th>
              <th className="text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
              <tr key={item.item_id} className={item.served ? "table-success" : ""}>
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
        <Button variant="secondary" className="mr-auto">
          Close
        </Button>
        {/* If the order is placed */}
        {order.status === 1 && (
          <Button variant="primary" onClick={() => handleServeOrder(order.order_id)}>
            <FontAwesomeIcon className="mr-2" icon={faConciergeBell} />
            Served
          </Button>
        )}
        {/* If the receipt is requested */}
        {order.status === 3 && (
          <Button variant="primary" onClick={() => handlePaidOrder(order.order_id)}>
            <FontAwesomeIcon className="mr-2" icon={faDollarSign} />
            Paid
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default OrderDetails;
