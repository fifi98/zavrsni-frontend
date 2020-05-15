import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faPercentage, faChartLine, faChair, faFileInvoice, faTag, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="my-3 bg-white rounded shadow-sm p-2">
      <ul className="nav flex-column nav-pills">
        <li className="nav-item">
          <Link
            to="/restaurant/orders"
            className={
              props.location.pathname === "/restaurant/orders" || props.location.pathname === "/restaurant/"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faTag} />
            Orders
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link
            to="/restaurant/reservations"
            className={props.location.pathname === "/restaurant/reservations" ? "nav-link active" : "nav-link"}
          >
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faFileInvoice} />
            Reservations
          </Link>
        </li> */}
        <li className="nav-item">
          <Link to="/restaurant/tables" className={props.location.pathname === "/restaurant/tables" ? "nav-link active" : "nav-link"}>
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faChair} />
            Tables
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/restaurant/menu/categories"
            className={props.location.pathname === "/restaurant/menu/categories" ? "nav-link active" : "nav-link"}
          >
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faBars} />
            Menu categories
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/restaurant/menufood" className={props.location.pathname === "/restaurant/menufood" ? "nav-link active" : "nav-link"}>
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faUtensils} />
            Menu items
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/restaurant/discounts" className={props.location.pathname === "/restaurant/discounts" ? "nav-link active" : "nav-link"}>
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faPercentage} />
            Discounts
          </Link>
        </li> */}
        {/* <li className="nav-item">
          <Link to="/restaurant/stats" className={props.location.pathname === "/restaurant/stats" ? "nav-link active" : "nav-link"}>
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faChartLine} />
            Statistics
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
