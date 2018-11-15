import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import HomeContainer from "./home/home_container";
import DashboardContainer from "./dashboard/dashboard_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Link } from "react-router-dom";

const App = () => {
  // debugger
  return(
    <>
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/dashboard" component={DashboardContainer} />
        <AuthRoute path="/" component={HomeContainer} />
      </Switch>
    </>
  )
};

export default App;
