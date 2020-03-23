import React from "react";
import { Route } from "react-router-dom";
import Orders from "../screens/restaurant/Orders";
import Reservations from "../screens/restaurant/Reservations";
import Tables from "../screens/restaurant/Tables";
import MenuFood from "../screens/restaurant/MenuFood";
import MenuCategories from "../screens/restaurant/MenuCategories";
import Discounts from "../screens/restaurant/Discounts";
import Stats from "../screens/restaurant/Stats";
import Navbar from "../components/Navbar";
import Sidebar from "../components/restaurant/Sidebar";
import PrivateRoute from "../components/Routes/PrivateRoute";

const RestaurantRoutes = props => {
  return (
    <>
      <Navbar {...props} />
      <div className="row dashboard">
        <div className="col-xs-12 col-md-12 col-lg-3">
          <Sidebar {...props} />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-9">
          <PrivateRoute path="/restaurant/" component={Orders} exact />
          <PrivateRoute path="/restaurant/orders" component={Orders} exact />
          <PrivateRoute path="/restaurant/reservations" component={Reservations} exact />
          <PrivateRoute path="/restaurant/tables" component={Tables} exact />
          <PrivateRoute path="/restaurant/menufood" component={MenuFood} exact />
          <PrivateRoute path="/restaurant/menu/categories" component={MenuCategories} exact />
          <PrivateRoute path="/restaurant/discounts" component={Discounts} exact />
          <PrivateRoute path="/restaurant/stats" component={Stats} exact />
        </div>
      </div>
    </>
  );
};

export default RestaurantRoutes;
