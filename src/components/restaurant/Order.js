import React from "react";
import TimeAgo from "react-timeago";
import { faChair, faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Order = ({ order, onClick }) => {
  return (
    <div className={`card ${order.requestedReceipt ? "bg-success" : ""} mt-3`} onClick={() => onClick(order.order_id)}>
      <div className={`card-body ${order.requestedReceipt ? "text-white" : ""}`}>
        <div className="row">
          <div className="col-11">
            <h6 className="card-title m-0">
              <FontAwesomeIcon className="mr-2" size="sm" icon={faChair} />
              {order.table_name}
            </h6>

            <p className="card-text">
              <small className={order.requestedReceipt ? "" : "text-muted"}>
                <TimeAgo
                  date={order.date}
                  formatter={(value, unit) => {
                    if (unit === "second" && value < 5) return "just now";
                    if (unit === "second") return "less than a minute ago";
                    if (unit === "minute") return `${value} ${value === 1 ? "minute" : "minutes"} ago`;
                  }}
                />
              </small>
            </p>
          </div>
          {order.requestedReceipt && (
            <div className="col-1 d-flex justify-content-center align-items-center">
              <FontAwesomeIcon className="mr-2" size="xl" color="white" icon={faMoneyBillAlt} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
