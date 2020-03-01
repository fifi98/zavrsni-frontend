import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Restaurant from "./screens/restaurant/Restaurant";
import User from "./screens/registeredUser/User";
import PrivateRoute from "./components/routes/PrivateRoute";
import "popper.js";
import "jquery/src/jquery";
import "bootstrap/dist/css/bootstrap.css";
// import "./css/bootstrap-4.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <PrivateRoute path="/restaurant" component={Restaurant} />

        <Route path="/user" component={User} />
      </Switch>
    </Router>
  );
}

export default App;
