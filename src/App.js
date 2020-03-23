import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";

import RestaurantRoutes from "./routes/RestaurantRoutes";
import UserRoutes from "./routes/UserRoutes";
// import CustomerRoutes from "./components/routes/CustomerRoutes";
// import GuestRoutes from "./components/routes/GuestRoutes";

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
        <Route path="/order" component={UserRoutes} />

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
