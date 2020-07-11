import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Order from "../screens/registeredUser/Order";
import AddedItems from "../components/user/AddedItems";

const RestaurantRoutes = (props) => {
  return (
    <>
      <Navbar {...props} />
      <div className="row dashboard">
        <div className="col-xs-12 col-md-12 col-lg-3">
          <AddedItems />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-9">
          <Route path="/order/:tableID" component={Order} />
        </div>
      </div>
    </>
  );
};

export default RestaurantRoutes;
