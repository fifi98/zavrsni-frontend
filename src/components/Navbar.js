import React from "react";
import API from "../util/api";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const user = useSelector((state) => state);

  const handleLogout = () => {
    API.post("/user/logout").then((res) => {
      props.history.push("/login");
    });
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light shadow-sm">
      <nav className="nav nav-underline mr-auto">{user.name}</nav>
      <nav className="nav nav-underline">
        <button onClick={handleLogout} className="btn btn-dark">
          Logout
        </button>
      </nav>
    </nav>
  );
};

export default Navbar;
