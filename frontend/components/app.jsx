import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import { Link } from "react-router-dom";

const App = () => {
  // debugger
  return(
    <div className="top">
      <header className="main-header">
        <div className="header-items">
          <a href="/" className="stride-title">STRIDE</a>
          <GreetingContainer />
        </div>
      </header>
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
  )
};

export default App;
