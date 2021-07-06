import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

const PrivateRoute = (props) => {
  const { component: Component, userType, ...rest } = props;
  const { user } = useUser();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          if (!userType || (userType && user.role === userType))
            return <Component {...props} />;
          else return <Redirect to="/" />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
