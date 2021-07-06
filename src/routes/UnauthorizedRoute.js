import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import InputsPage from "../pages/InputsPage/InputsPage";

const UnauthorizedRoute = (props) => {
  const { component: Component, ...rest } = props;
  const { user } = useUser();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          return <Component {...props} />;
        } else {
          return <Redirect to={InputsPage.routeName} />;
        }
      }}
    />
  );
};

export default UnauthorizedRoute;
