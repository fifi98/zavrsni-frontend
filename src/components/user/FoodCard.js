import React from "react";

const FoodCard = ({ item, onClick, selected }) => {
  return (
    <div className={`card food-card mb-3 ${selected ? "text-white bg-primary" : ""} mt-2`} onClick={(event) => onClick(event, item)}>
      <div className="row no-gutters">
        <div className="col-10">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              <small className={`${selected ? "text-white" : "text-muted"}`}>{item.description}</small>
            </p>
            <p className="card-text">{item.price}kn</p>
          </div>
        </div>
        {selected && (
          <div className="col-2 align-self-center">
            <input name="quantity" className="form-control form-control-sm" value="1" style={{ width: 40, textAlign: "center" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
