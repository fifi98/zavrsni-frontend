import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";

import RestaurantRoutes from "./components/routes/RestaurantRoutes";
import CustomerRoutes from "./components/routes/CustomerRoutes";
import GuestRoutes from "./components/routes/GuestRoutes";

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

        <Route path="/restaurant" component={RestaurantRoutes} />
        <Route path="/customer" component={CustomerRoutes} />
        <Route path="/guest" component={GuestRoutes} />

        {/* <PrivateRoute path="/restaurant" component={Restaurant} />
        <PrivateRoute path="/customer" component={User} />

        <Route path="/user" component={User} /> */}
      </Switch>
    </Router>
  );
}

export default App;
