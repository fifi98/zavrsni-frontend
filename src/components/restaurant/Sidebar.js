import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faChair, faClipboardCheck, faTag, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = ({ location }) => {
  const restaurantRoutes = [
    {
      name: "Orders",
      icon: faTag,
      path: "/restaurant/orders",
    },
    {
      name: "Tables",
      icon: faChair,
      path: "/restaurant/tables",
    },
    {
      name: "Menu categories",
      icon: faBars,
      path: "/restaurant/menu/categories",
    },
    {
      name: "Menu items",
      icon: faUtensils,
      path: "/restaurant/menu/items",
    },
    {
      name: "Past orders",
      icon: faClipboardCheck,
      path: "/restaurant/past-orders",
    },
  ];

  return (
    <div className="my-3 bg-white rounded shadow-sm p-2">
      <ul className="nav flex-column nav-pills">
        {restaurantRoutes.map((route) => (
          <li className="nav-item">
            <Link to={route.path} className={location.pathname === route.path ? "nav-link active" : "nav-link"}>
              <FontAwesomeIcon className="mr-2" fixedWidth icon={route.icon} />
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
