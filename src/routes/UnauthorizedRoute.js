import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import RedirectPage from "../pages/RedirectPage/RedirectPage";

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
          return <Redirect to={RedirectPage.routeName} />;
        }
      }}
    />
  );
};

export default UnauthorizedRoute;
