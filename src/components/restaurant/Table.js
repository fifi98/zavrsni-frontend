import React from "react";
import { tableColor } from "../../constants/colors";

const Table = props => {
  const handleClick = () => {
    alert("a");
  };

  let color;
  if (props.type === "empty") color = tableColor.empty;
  if (props.type === "occupied") color = tableColor.occupied;
  if (props.type === "reserved") color = tableColor.reserved;

  return (
    <a href="#" onClick={handleClick}>
      <div
        className="card mb-3"
        style={{ width: 200, overflow: "hidden", margin: 20 }}
      >
        <div className="row no-gutters">
          <div className="col-md-11">
            <div className="card-body">
              <h5 className="card-title">T{props.id}</h5>
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
