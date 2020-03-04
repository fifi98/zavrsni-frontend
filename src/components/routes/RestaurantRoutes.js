import React from "react";
import { Route } from "react-router-dom";
import Orders from "../../screens/restaurant/Orders";
import Reservations from "../../screens/restaurant/Reservations";
import Tables from "../../screens/restaurant/Tables";
import MenuFood from "../../screens/restaurant/MenuFood";
import Discounts from "../../screens/restaurant/Discounts";
import Stats from "../../screens/restaurant/Stats";
import Navbar from "../Navbar";
import Sidebar from "../restaurant/Sidebar";

const RestaurantRoutes = props => {
  return (
    <>
      <Navbar {...props} />
      <div className="row dashboard">
        <div className="col-xs-12 col-md-12 col-lg-3">
          <Sidebar {...props} />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-9">
          <Route path="/restaurant/" component={Orders} exact />

          <Route path="/restaurant/orders" component={Orders} exact />
          <Route path="/restaurant/reservations" component={Reservations} exact />
          <Route path="/restaurant/tables" component={Tables} exact />
          <Route path="/restaurant/menufood" component={MenuFood} exact />
          <Route path="/restaurant/discounts" component={Discounts} exact />
          <Route path="/restaurant/stats" component={Stats} exact />
        </div>
      </div>
    </>
  );
};

export default RestaurantRoutes;
