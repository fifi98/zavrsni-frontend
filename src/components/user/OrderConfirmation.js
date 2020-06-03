import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const OrderConfirmation = () => {
  return (
    <Container>
      <Jumbotron className="justify-content-center" style={{ marginTop: 40 }}>
        <Container className="text-center">
          <FontAwesomeIcon icon={faCheckCircle} color="#2F7DF6" size="10x" />
          <h2 style={{ marginTop: 30, marginBottom: 30 }}>Order completed</h2>
          <p style={{ marginBottom: 30 }}>Thank you for your order! Hope to see you again soon!</p>
        </Container>
      </Jumbotron>
    </Container>
  );
};

export default OrderConfirmation;
