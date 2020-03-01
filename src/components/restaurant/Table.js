import React from "react";

const Table = props => {
  const handleClick = () => {
    alert("a");
  };

  let color;
  if (props.type === "Empty") color = "bg-success";
  if (props.type === "Occupied") color = "bg-danger";
  if (props.type === "Reserved") color = "bg-warning";

  return (
    <a
      href="!#"
      className="restaurantTableLink m-2"
      onClick={handleClick}
      style={{ width: "15%" }}
    >
      <div className="card" style={{ overflow: "hidden", height: 100 }}>
        <div className="row no-gutters">
          <div className="col-11">
            <div className="card-body">
              <h6 className="card-title">T{props.id}</h6>
              <p className="card-text"></p>
              <p className="card-text">
                <small className="text-muted">{props.type}</small>
              </p>
            </div>
          </div>

          <div className={"col-1 " + color}></div>
        </div>
      </div>
    </a>
  );
};

export default Table;
