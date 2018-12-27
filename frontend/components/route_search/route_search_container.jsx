import React from "react";
import { connect } from "react-redux";
import { fetchRoutes } from "../../actions/route_actions";
import RouteSearch from "./route_search";

const msp = state => {
  return ({
    routes: Object.keys(state.routes).map(id => state.routes[id])
  });
}

const mdp = dispatch => {
  return ({
    fetchRoutes: () => dispatch(fetchRoutes())
  })
}

export default connect(msp,mdp)(RouteSearch);
