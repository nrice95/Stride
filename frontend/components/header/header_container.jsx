import { connect } from "react-redux";
import Header from "./header";
import { receiveCurrentAthlete } from "../../actions/session_actions";
import { logout } from '../../actions/session_actions';


const msp = state => {
  // debugger
  return ({
    currentAthlete: state.entities.athletes[state.session.id]
  });
}

const mdp = dispatch => {
  return ({
    receiveCurrentAthlete: athlete => dispatch(receiveCurrentAthlete(athlete)),
    logout: () => dispatch(logout())
  });
};

export default connect(msp,mdp)(Header);
