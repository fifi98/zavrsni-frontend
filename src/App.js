import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Manager from "./screens/restaurantManager/Manager";
import User from "./screens/registeredUser/User";
import "popper.js";
import "jquery/src/jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="/manager" component={Manager} />

        <Route path="/user" component={User} />
      </Switch>
    </Router>
  );
}

export default App;
