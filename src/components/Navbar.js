import React from "react";
import API from "../util/api";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../actions/";

const Navbar = ({ history }) => {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLogout = () => {
    API.post("/user/logout").then((res) => {
      dispatch(signOut());
      history.push("/login");
    });
  };

  const handleSignIn = () => {
    history.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light shadow-sm">
      <nav className="nav nav-underline mr-auto">{user.name === null ? "Ordering as guest" : user.name}</nav>
      <nav className="nav nav-underline">
        {user.name === null ? (
          <button onClick={handleSignIn} className="btn btn-dark">
            Sign in
          </button>
        ) : (
          <button onClick={handleLogout} className="btn btn-dark">
            Logout
          </button>
        )}
      </nav>
    </nav>
  );
};

export default Navbar;
