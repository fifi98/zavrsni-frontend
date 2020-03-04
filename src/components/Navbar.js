import React from "react";
import API from "../util/api";

const Navbar = props => {
  const handleLogout = () => {
    API.post("/user/logout").then(res => {
      props.history.push("/login");
    });
  };

  console.log(props);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light shadow-sm">
      <nav className="nav nav-underline mr-auto">Restaurants</nav>
      <nav className="nav nav-underline">
        <button onClick={handleLogout} className="btn btn-dark">
          Logout
        </button>
      </nav>
    </nav>
  );
};

export default Navbar;
