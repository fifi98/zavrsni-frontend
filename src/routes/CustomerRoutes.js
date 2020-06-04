import React from "react";
import Orders from "../screens/restaurant/Orders";
import Navbar from "../components/Navbar";
import Sidebar from "../components/restaurant/Sidebar";
import PrivateRoute from "../components/Routes/PrivateRoute";

const CustomerRoutes = (props) => {
  return (
    <>
      <Navbar {...props} />
      <div className="row dashboard">
        <div className="col-xs-12 col-md-12 col-lg-3">
          <Sidebar {...props} />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-9">
          <PrivateRoute path="/customer/" component={Orders} exact />
        </div>
      </div>
    </>
  );
};

export default CustomerRoutes;
