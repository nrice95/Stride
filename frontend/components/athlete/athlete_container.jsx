import { connect } from "react-redux";
import Athlete from "./athlete";
import { logout } from "../../actions/session_actions";

const msp = state => {
  return ({
    currentAthlete: state.entities.athletes[state.session.id]
  });
}

const mdp = dispatch => {
  return ({
    logout: () => dispatch(logout())
  })
}

export default connect(msp,mdp)(Athlete);
