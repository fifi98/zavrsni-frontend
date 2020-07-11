import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUtensils } from "@fortawesome/free-solid-svg-icons";
import Input from "../components/ui/Input";
import API from "../util/api";

import "../css/Login.css";

const Login = () => {
  const [input, setInput] = useState({
    userType: "customer",
    fullName: "",
    email: "",
    password: "",
    restaurantName: "",
    restaurantAddress: "",
    restaurantTelephone: "",
  });

  const [error, setError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    if (input.email.length === 0 || input.password.length === 0) setError({ ...error, error: true });

    API.post("/user/register", input)
      .then((res) => console.log(res))
      .catch((err) => setError(true));
  };

  const changeHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <div className="h-100 d-flex flex-row justify-content-center align-items-center">
      <form className="form-signin">
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 font-weight-normal">Register</h1>
          <p>Please enter your information in order to create an account.</p>
        </div>

        <div className="form-label-group d-flex">
          <div className="btn-group btn-group-toggle w-100">
            <label className={"btn btn-outline-dark " + (input.userType === "customer" ? "active" : "")}>
              <FontAwesomeIcon icon={faUser} />
              <input type="radio" name="userType" value="customer" checked={input.userType === "customer"} onChange={changeHandler} />{" "}
              Customer
            </label>
            <label className={"btn btn-outline-dark " + (input.userType === "restaurant" ? "active" : "")}>
              <FontAwesomeIcon icon={faUtensils} />
              <input
                type="radio"
                name="userType"
                value="restaurant"
                checked={input.userType === "restaurant"}
                onChange={changeHandler}
              />{" "}
              Restaurant
            </label>
          </div>
        </div>

        {input.userType === "customer" ? (
          <Input type="text" name="name" label="Full name" value={input.name} error={error.error} onChange={changeHandler} autoFocus />
        ) : (
          <Fragment>
            <Input
              type="text"
              name="restaurantName"
              label="Restaurant Name"
              value={input.restaurantName}
              error={error.error}
              onChange={changeHandler}
              autoFocus
            />
            <Input
              type="text"
              name="restaurantAddress"
              label="Address"
              value={input.restaurantAddress}
              error={error.error}
              onChange={changeHandler}
            />
            <Input
              type="text"
              name="restaurantTelephone"
              label="Telephone Number"
              value={input.restaurantTelephone}
              error={error.error}
              onChange={changeHandler}
            />
          </Fragment>
        )}

        <Input type="email" name="email" label="Email address" value={input.email} error={error.error} onChange={changeHandler} />

        <Input type="password" name="password" label="Password" value={input.password} error={error.error} onChange={changeHandler} />

        <div className="checkbox mb-3">
          <Link to="/login">Already have an account?</Link>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={submitHandler}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Login;
