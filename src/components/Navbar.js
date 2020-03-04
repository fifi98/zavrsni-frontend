import React from "react";
import API from "../util/api";

const Navbar = props => {
  const handleLogout = () => {
    API.post("/user/logout").then(res => {
      props.history.push("/login");
    });
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-primary shadow-sm">
      <nav className="nav nav-underline">
        <button onClick={handleLogout} className="btn btn-primary">
          Logout
        </button>
      </nav>
    </nav>
  );
};

export default Navbar;
