import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Order from "./screens/registeredUser/Order";
import RestaurantRoutes from "./routes/RestaurantRoutes";
import CustomerRoutes from "./routes/CustomerRoutes";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";

import "popper.js";
import "jquery/src/jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <Router>
      <Switch>
        {/* Public routes */}
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/register" component={Register} />

        {/* Restaurant owner routes */}
        <PrivateRoute path="/restaurant" component={RestaurantRoutes} />

        {/* Guest users and registered users routes */}
        <Route path="/order/:tableID" component={Order} />

        {/* Registered users routes */}
        <PrivateRoute path="/customer" component={CustomerRoutes} />
      </Switch>
    </Router>
  );
}

export default App;
