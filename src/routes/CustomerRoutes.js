import React from "react";
import Navbar from "../components/ui/Navbar";
import Sidebar from "../components/restaurant/Sidebar";
import PrivateRoute from "../components/routes/PrivateRoute";
import PastOrders from "../screens/registeredUser/PastOrders";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const CustomerRoutes = (props) => {
  const user = useSelector((state) => state);

  if (user.user_type !== "customer") return <Redirect to={"/login"} />;

  return (
    <>
      <Navbar {...props} />
      <div className="row dashboard">
        <div className="col-xs-12 col-md-12 col-lg-3">
          <Sidebar {...props} />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-9">
          <PrivateRoute path="/customer/" component={PastOrders} exact />
        </div>
      </div>
    </>
  );
};

export default CustomerRoutes;
