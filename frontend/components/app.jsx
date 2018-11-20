import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './signup/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import HomeContainer from "./home/home_container";
import DashboardContainer from "./dashboard/dashboard_container";
import AthleteContainer from "./athlete/athlete_container";
import MapContainer from "./map/map_container";
import MapTest from "./map_demo/map_test_container";
import RouteShow from "./route_show/route_show_container";
import Modal from "./modal/modal";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Link } from "react-router-dom";

const App = () => {
  // debugger
  return(
    <>
      <Modal />
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/dashboard" component={DashboardContainer} />
        <ProtectedRoute path="/athlete" component={AthleteContainer}/>
        <ProtectedRoute path="/map" component={MapContainer}/>
        <ProtectedRoute path="/route/:routeId" component={RouteShow}/>
        <ProtectedRoute path="/maptest" component={MapTest}/>
        <AuthRoute path="/" component={HomeContainer} />
      </Switch>
    </>
  )
};

export default App;
