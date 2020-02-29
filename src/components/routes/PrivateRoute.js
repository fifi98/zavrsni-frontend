import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import API from "../../util/api";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.post("verify")
      .then(res => {
        if (res.status === 200) {
          setAuthenticated(true);
        }
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return null;
  }

  if (authenticated) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  } else {
    return <Redirect to={"/login"} />;
  }
};

export default PrivateRoute;
