import React, { useState } from "react";
import "../css/Login.css";
import Input from "../components/ui/Input";
import API from "../util/api";
import { useDispatch } from "react-redux";
import { signIn } from "../actions/index";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({ error: false, message: "" });
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    if (input.email.length === 0 || input.password.length === 0) {
      setError({ ...error, error: true });
      return;
    }

    API.post("/user/login", {
      email: input.email,
      password: input.password,
    })
      .then((res) => {
        if (res.data.success) {
          dispatch(signIn(res.data.user));

          if (res.data.user.type === "restaurant") {
            props.history.push("/restaurant/orders");
          } else {
            props.history.push("/customer/");
          }
        } else {
          setError({ error: true, message: "" });
        }
      })
      .catch((err) => setError({ ...error, error: true }));
  };

  const changeHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <div className="h-100 d-flex flex-row justify-content-center align-items-center">
      <form className="form-signin">
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 font-weight-normal">Login</h1>
          <p>Please login below using your credentials.</p>
        </div>

        <Input type="email" name="email" label="Email address" value={input.email} error={error.error} onChange={changeHandler} autoFocus />

        <Input type="password" name="password" label="Password" value={input.password} error={error.error} onChange={changeHandler} />

        <div className="mb-3">
          <Link to="/register">Don't have an account?</Link>
        </div>

        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={submitHandler}>
          Sign in
        </button>
        <div className="m-4 text-center">
          <Link to="/register">Forgot your password?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
