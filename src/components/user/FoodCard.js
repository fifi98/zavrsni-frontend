import React from "react";

const FoodCard = ({ item, onClick, selected }) => {
  return (
    <div className={`card mb-3 ${selected && "border-primary"} mt-2`} onClick={() => onClick(item)}>
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
        {/* <div className="col-1">
          <input name="quantity" className="form-control" value="1" />
        </div> */}
      </div>
    </div>
  );
};

export default FoodCard;
