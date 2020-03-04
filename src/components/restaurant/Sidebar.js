import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faPercentage,
  faChartLine,
  faChair,
  faFileInvoice,
  faTag
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="my-3 bg-white rounded shadow-sm">
      <ul className="nav flex-column nav-pills">
        <li className="nav-item">
          <Link to="/restaurant/orders" className="nav-link active">
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faTag} />
            Orders
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/restaurant/reservations" className="nav-link">
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faFileInvoice} />
            Reservations
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/restaurant/tables" className="nav-link">
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faChair} />
            Tables
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/restaurant/menufood" className="nav-link">
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faUtensils} />
            Menu and Food
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/restaurant/discounts" className="nav-link">
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faPercentage} />
            Discounts
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/restaurant/stats" className="nav-link">
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faChartLine} />
            Statistics
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
