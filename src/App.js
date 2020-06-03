import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Order from "./screens/registeredUser/Order";
import RestaurantRoutes from "./routes/RestaurantRoutes";

import "popper.js";
import "jquery/src/jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <Router>
      <Switch>
        {/* Public routes */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        {/* Restaurant owner routes */}
        <Route path="/restaurant" component={RestaurantRoutes} />

        {/* Guest users and registered users routes */}
        <Route path="/order/:tableID" component={Order} />

        {/* <Route path="/customer" component={CustomerRoutes} />
        <Route path="/guest" component={GuestRoutes} /> */}

        {/* <PrivateRoute path="/restaurant" component={Restaurant} />
        <PrivateRoute path="/customer" component={User} />

        <Route path="/user" component={User} /> */}
      </Switch>
    </Router>
  );
}

export default App;
