import React from "react";

const FoodCard = ({ item, onClick, selected, addedItems, handleQuantityChange }) => {
  return (
    <div className={`card food-card mb-3 ${selected ? "text-white bg-primary" : ""} mt-2`} onClick={(event) => onClick(event, item)}>
      <div className="row no-gutters">
        <div className="col-9 col-sm-10 col-md-10 col-lg-11 col-xl-11">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              <small className={`${selected ? "text-white" : "text-muted"}`}>{item.description}</small>
            </p>
            <p className="card-text">${item.price}</p>
          </div>
        </div>
        {selected && (
          <div className="col-3 col-sm-2 col-md-2 col-lg-1 col-xl-1 align-self-center">
            <input
              name="quantity"
              className="form-control form-control-sm"
              value={addedItems.find((i) => i.item_id === item.item_id).quantity}
              onChange={(event) => handleQuantityChange(item.item_id, event.target.value)}
              style={{ width: 50, textAlign: "center" }}
              type="number"
              maxLength="2"
              width="2"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
