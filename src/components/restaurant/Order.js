import React from "react";
import TimeAgo from "react-timeago";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Order = ({ order, onClick }) => {
  return (
    <div className="card mt-3" onClick={() => onClick(order.order_id)}>
      <div className="card-body">
        <div className="row">
          <div className="col-10">
            <h6 className="card-title m-0">
              <FontAwesomeIcon className="mr-2" size="sm" icon={faChair} />
              {order.table_name}
              {/* <a href="#">{order.table_name}</a> */}
            </h6>

            <p className="card-text">
              <small className="text-muted">
                <TimeAgo
                  date={Date.now()}
                  formatter={(value, unit) => {
                    if (unit === "second" && value < 15) return "just now";
                    if (unit === "second") return "few seconds ago";
                    if (unit === "minute") return `${value} ${value === 1 ? "minute" : "minutes"} ago`;
                  }}
                />
              </small>
            </p>
          </div>
          <div className="col-2 my-auto text-center">
            {/* <FontAwesomeIcon style={{ cursor: "pointer" }} className="mr-2" size="lg" icon={faCheckCircle} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
