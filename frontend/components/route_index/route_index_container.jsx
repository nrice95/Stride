import { connect } from "react-redux";
import RouteIndex from "./route_index";
import { fetchRoutes } from "../../actions/route_actions";

const msp = state => {
  return ({
    routes: Object.keys(state.routes).map(id => state.routes[id])
  });
}

const mdp = dispatch => {
  return ({
    fetchRoutes: () => dispatch(fetchRoutes()),
  })
}

export default connect(msp,mdp)(RouteIndex);
