import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const FoodCard = ({ item }) => {
  return (
    <div className="card mb-3 mt-2">
      <div className="row no-gutters">
        <div className="col-8 col-md-11">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              <small className="text-muted">{item.description}</small>
            </p>
            <p className="card-text">{item.price}kn</p>
          </div>
        </div>
        <div className="col-4 col-md-1 my-auto text-center">
          <FontAwesomeIcon style={{ cursor: "pointer" }} className="mr-2" fixedWidth icon={faEdit} />
          <FontAwesomeIcon style={{ cursor: "pointer" }} className="mr-2" fixedWidth icon={faTrash} />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
