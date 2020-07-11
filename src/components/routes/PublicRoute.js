import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../actions/index";
import API from "../../util/api";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state);

  const dispatch = useDispatch();

  // Check if JWT is valid and if user has access to that route (user type)
  useEffect(() => {
    API.post("/user/verify")
      .then((res) => {
        if (res.status === 200) {
          dispatch(signIn(res.data.data));
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return null;
  }

  if (user.user_type) {
    if (user.user_type === "restaurant") return <Redirect to={"/restaurant"} />;
    if (user.user_type === "customer") return <Redirect to={"/customer"} />;
  } else {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
};

export default PublicRoute;
