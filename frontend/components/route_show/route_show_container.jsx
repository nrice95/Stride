import { connect } from "react-redux";

import {fetchRoute} from "../../actions/route_actions";
import RouteShow from "./route_show";

const msp = (state, ownProps) => {
  debugger
  return ({
    route: state.entities.routes[ownProps.match.params.routeId],
    routeId: ownProps.match.params.routeId
  })
}

const mdp = dispatch => {
  return ({
    fetchRoute: id => dispatch(fetchRoute(id))
  })
}

export default connect(msp,mdp)(RouteShow);
