import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const TableOccupied = () => {
  return (
    <Container>
      <Jumbotron className="justify-content-center" style={{ marginTop: 40 }}>
        <Container className="text-center">
          <FontAwesomeIcon icon={faExclamationCircle} color="#2F7DF6" size="10x" />
          <h2 style={{ marginTop: 30, marginBottom: 30 }}>This table is occupied</h2>
          <p style={{ marginBottom: 30 }}>Unfortunately this table is occupied! Are you sure you have the correct link/QR code?</p>
        </Container>
      </Jumbotron>
    </Container>
  );
};

export default TableOccupied;
