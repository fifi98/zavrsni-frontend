import React from "react";

const FoodCard = ({ item, onClick }) => {
  return (
    <div className="card mb-3 mt-2 " onClick={() => onClick(item)}>
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
      </div>
    </div>
  );
};

export default FoodCard;
