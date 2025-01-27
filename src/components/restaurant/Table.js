import React from "react";

const Table = ({ table }) => {
  let color;
  if (table.status === "Empty") color = "bg-success";
  if (table.status === "Occupied") color = "bg-danger";
  if (table.status === "Reserved") color = "bg-warning";

  return (
    <div className="restaurantTableLink col-6 col-xl-2 col-lg-3 col-md-4 col-sm-4 mb-4">
      <div className="card" style={{ overflow: "hidden", height: 100 }}>
        <div className="row no-gutters">
          <div className="col-11">
            <div className="card-body">
              <h6 className="card-title">{table.label}</h6>
              <p className="card-text"></p>
              <p className="card-text">
                <small className="text-muted">{table.status}</small>
              </p>
            </div>
          </div>
          <div className={"col-1 " + color}></div>
        </div>
      </div>
    </div>
  );
};

export default Table;
