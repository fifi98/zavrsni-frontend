import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faChair, faClipboardCheck, faTag, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = ({ location }) => {
  const user = useSelector((state) => state);
  const routes = [
    {
      name: "Orders",
      icon: faTag,
      path: "/restaurant/orders",
      role: "restaurant",
    },
    {
      name: "Tables",
      icon: faChair,
      path: "/restaurant/tables",
      role: "restaurant",
    },
    {
      name: "Menu categories",
      icon: faBars,
      path: "/restaurant/menu/categories",
      role: "restaurant",
    },
    {
      name: "Menu items",
      icon: faUtensils,
      path: "/restaurant/menu/items",
      role: "restaurant",
    },
    {
      name: "Past orders",
      icon: faClipboardCheck,
      path: "/restaurant/past-orders",
      role: "restaurant",
    },
    {
      name: "Past orders",
      icon: faClipboardCheck,
      path: "/customer/",
      role: "customer",
    },
  ];

  return (
    <div className="my-3 bg-white rounded shadow-sm p-2">
      <ul className="nav flex-column nav-pills">
        {routes.map(
          (route) =>
            route.role === user.user_type && (
              <li className="nav-item">
                <Link to={route.path} className={location.pathname === route.path ? "nav-link active" : "nav-link"}>
                  <FontAwesomeIcon className="mr-2" fixedWidth icon={route.icon} />
                  {route.name}
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
