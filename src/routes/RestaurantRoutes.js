import React, { useEffect } from "react";
import Orders from "../screens/restaurant/Orders";
import Tables from "../screens/restaurant/Tables";
import MenuFood from "../screens/restaurant/MenuFood";
import MenuCategories from "../screens/restaurant/MenuCategories";
import PastOrders from "../screens/restaurant/PastOrders";
import Navbar from "../components/ui/Navbar";
import Sidebar from "../components/restaurant/Sidebar";
import PrivateRoute from "../components/routes/PrivateRoute";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const RestaurantRoutes = (props) => {
  const user = useSelector((state) => state);

  if (user.user_type !== "restaurant") return <Redirect to={"/login"} />;

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
          <PrivateRoute path="/restaurant/tables" component={Tables} exact />
          <PrivateRoute path="/restaurant/menu/items" component={MenuFood} exact />
          <PrivateRoute path="/restaurant/menu/categories" component={MenuCategories} exact />
          <PrivateRoute path="/restaurant/past-orders" component={PastOrders} exact />
        </div>
      </div>
    </>
  );
};

export default RestaurantRoutes;
