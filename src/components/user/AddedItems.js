import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Badge } from "react-bootstrap";

const ListItem = ({ item, served }) => {
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${served ? "list-group-item-success" : ""}`}>
      {item.quantity} × {item.name} ({item.price} kn)
      <Badge variant={`${served ? "light" : "secondary"}`}>{item.price * item.quantity} kn</Badge>
    </li>
  );
};

const AddedItems = ({ addedItems, handleOrder, orderStatus, handleRequestReceipt, orderItems }) => {
  const getAddedItemsCost = () => {
    let total = 0;
    addedItems.forEach((item) => (total += item.price * item.quantity));
    return total;
  };

  const getOrderItemsCost = () => {
    let total = 0;
    orderItems.forEach((item) => (total += item.price * item.quantity));
    return total;
  };

  return (
    <div className="my-3 p-3 bg-white rounded shadow-sm">
      <div className="clearfix border-bottom border-gray mb-2">
        <div className="float-left mt-2 mb-3">
          <h6 className="mb-0 ">
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faListAlt} /> Added items
          </h6>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        {orderItems.map((item) => (
          <ListItem item={item} key={item.item_id} served={true} />
        ))}
        {addedItems.map((item) => (
          <ListItem item={item} key={item.item_id} />
        ))}
      </ul>
      <div className="clearfix pt-2 mt-2">
        <Row>
          {addedItems.length === 0 && orderStatus === 0 && (
            <Col>
              <p className="text-center">Please select items below you would like to add to your order.</p>
            </Col>
          )}
          {(orderStatus === 0 || orderStatus === 2) && addedItems.length > 0 && (
            <Col>
              <button className="btn btn-primary w-100" onClick={handleOrder}>
                Click to order - {getAddedItemsCost()} kn
              </button>
            </Col>
          )}

          {orderStatus === 2 && (
            <Col>
              <button className="btn btn-primary w-100" onClick={handleRequestReceipt}>
                Request receipt - {getOrderItemsCost()} kn
              </button>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};

export default AddedItems;
