import React, { useEffect, useState } from "react";
import { Modal, Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faConciergeBell, faMoneyBillAlt, faUtensils } from "@fortawesome/free-solid-svg-icons";

const OrderStatusModal = ({ orderStatus }) => {
  const STATUS = {
    0: {
      message: "To make an order, please select items from the menu and click the 'Order' button!",
      icon: faUtensils,
    },
    1: {
      message: "You have placed a new order! Please wait while we are preparing it.",
      icon: faUserTie,
    },
    2: {
      message: "Your order has been served! You can now order new items or request a receipt.",
      icon: faConciergeBell,
    },
    3: {
      message: "You have requested a receipt! A waiter will come to your table shortly!",
      icon: faMoneyBillAlt,
    },
  };

  const [shown, setShown] = useState(false);

  useEffect(() => {
    setShown(true);
  }, [orderStatus]);

  return (
    <Modal show={shown} centered>
      <Modal.Header>
        <Container>
          <Row className="justify-content-center">
            <FontAwesomeIcon icon={STATUS[orderStatus].icon} color="#2F7DF6" size="10x" />
          </Row>
        </Container>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center mt-2">{STATUS[orderStatus].message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => setShown(false)} block>
          Great!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderStatusModal;
