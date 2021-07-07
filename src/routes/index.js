import React, { Component } from "react";
import { Redirect, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import UnauthorizedRoute from "./UnauthorizedRoute";
import LoginPage from "../pages/LoginPage/LoginPage";
import InputsPage from "../pages/InputsPage/InputsPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import RedirectPage from "../pages/RedirectPage/RedirectPage";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <UnauthorizedRoute
            exact
            path={LoginPage.routeName}
            component={LoginPage}
          />
          <UnauthorizedRoute
            exact
            path={RegisterPage.routeName}
            component={RegisterPage}
          />
          <PrivateRoute
            path="/sheets/:id"
            component={InputsPage}
            userType="user"
          />
          <PrivateRoute
            exact
            path={RedirectPage.routeName}
            component={RedirectPage}
          />
          <Redirect to={LoginPage.routeName} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;
