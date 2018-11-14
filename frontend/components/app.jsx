import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

const App = () => {
  // debugger
  return(
    <div>
      <header>
        <h1>Stride</h1>
        <GreetingContainer />
      </header>
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
  )
};

export default App;
