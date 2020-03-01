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
          <a className="nav-link active" href="#">
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faTag} />
            Orders
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link">
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faFileInvoice} />
            Reservations
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faChair} />
            Tables
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faUtensils} />
            Menu and Food
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faPercentage} />
            Discounts
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faChartLine} />
            Statistics
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
