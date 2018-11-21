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
import RouteIndex from "./route_index/route_index_container";
import ActivityForm from "./activity/create_activity_form_container";
import ActivityIndex from "./activity/activity_index_container";
import ActivityShow from "./activity/activity_show_container";
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
        <ProtectedRoute path="/routes" component={RouteIndex}/>
        <ProtectedRoute path="/activity/new" component={ActivityForm}/>
        <ProtectedRoute path="/activities" component={ActivityIndex}/>
        <ProtectedRoute path="/activity/:activityId" component={ActivityShow}/>
        <AuthRoute path="/" component={HomeContainer} />
      </Switch>
    </>
  )
};

export default App;
