import { connect } from "react-redux";
import { createRoute } from "../../actions/route_actions";
import Map from "./map";

const msp = state => {
  debugger
  return ({
    current_athlete_id: state.session.id
  })
}

const mdp = dispatch => {
  // debugger
  return ({
    createRoute: route => dispatch(createRoute(route))
  })
}

export default connect(msp,mdp)(Map);
