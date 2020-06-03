import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChair } from "@fortawesome/free-solid-svg-icons";

const TableConfirmation = ({ table, setConfirmed }) => {
  return (
    <Container>
      <Jumbotron className="justify-content-center" style={{ marginTop: 40 }}>
        <Container className="text-center">
          <FontAwesomeIcon icon={faChair} color="#2F7DF6" size="10x" />
          <h2 style={{ marginTop: 30, marginBottom: 30 }}>Are you at the table {table.label}?</h2>
          <p style={{ marginBottom: 30 }}>
            In order to proceed on making an order, please confirm that you are sitting at the table {table.label}.
          </p>
          <p>
            <Button variant="primary" onClick={() => setConfirmed(true)}>
              Yes, I want to make an order
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </Container>
  );
};

export default TableConfirmation;
