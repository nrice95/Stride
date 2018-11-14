import { connect } from "react-redux";
import Greeting from "./greeting";
import { receiveCurrentAthlete } from "../../actions/session_actions";

const msp = state => {
  return ({
    currentAthlete: state.entities.athletes[state.session.currentAthleteId]
  });
}

const mdp = dispatch => {
  return ({
    receiveCurrentAthlete: athlete => dispatch(receiveCurrentAthlete(athlete))
  });
};

export default connect(msp,mdp)(Greeting);
