import React from "react";
import { tableColor } from "../../constants/colors";

const Table = props => {
  const handleClick = () => {
    alert("a");
  };

  let color;
  if (props.type === "Empty") color = tableColor.empty;
  if (props.type === "Occupied") color = tableColor.occupied;
  if (props.type === "Reserved") color = tableColor.reserved;

  return (
    <a
      href="!#"
      className="restaurantTableLink m-2"
      onClick={handleClick}
      style={{ width: "15%" }}
    >
      <div className="card" style={{ overflow: "hidden" }}>
        <div className="row no-gutters">
          <div className="col-md-11">
            <div className="card-body">
              <h6 className="card-title">T{props.id}</h6>
              <p className="card-text"></p>
              <p className="card-text">
                <small className="text-muted">{props.type}</small>
              </p>
            </div>
          </div>

          <div className="col-md-1" style={{ backgroundColor: color }}></div>
        </div>
      </div>
    </a>
  );
};

export default Table;
