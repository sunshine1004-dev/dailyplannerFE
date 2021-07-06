import React, { Component } from "react";
import { Redirect, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import UnauthorizedRoute from "./UnauthorizedRoute";
import LoginPage from "../pages/LoginPage/LoginPage";
import InputsPage from "../pages/InputsPage/InputsPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

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
            exact
            path={InputsPage.routeName}
            component={InputsPage}
            userType="user"
          />
          <Redirect to={LoginPage.routeName} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;
