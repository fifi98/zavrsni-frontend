import React from "react";

const FoodCard = ({ item }) => {
  return (
    <div className="card mb-3 mt-2">
      <div className="row no-gutters">
        <div className="col-4 col-md-2">
          <img
            src="https://image.dnevnik.hr/media/images/1600xX/Jan2018/61454893.jpg"
            className="card-img"
            alt="..."
            style={{ height: "100%" }}
          />
        </div>
        <div className="col-8 col-md-10">
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
