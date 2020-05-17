import React from "react";
import TimeAgo from "react-timeago";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Order = ({ order, onClick }) => {
  console.log(order.date);
  return (
    <div className="card mt-3" onClick={() => onClick(order.order_id)}>
      <div className="card-body">
        <h6 className="card-title m-0">
          <FontAwesomeIcon className="mr-2" size="sm" icon={faChair} />
          {order.table_name}
        </h6>

        <p className="card-text">
          <small className="text-muted">
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
    </div>
  );
};

export default Order;
