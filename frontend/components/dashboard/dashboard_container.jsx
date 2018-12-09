import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { receiveCurrentAthlete } from "../../actions/session_actions";
import { logout } from '../../actions/session_actions';
import { fetchActivities } from "../../actions/activity_actions";


const msp = state => {
  // debugger
  return ({
    activities: Object.keys(state.activities).map(id => state.activities[id]),
    currentAthlete: state.entities.athletes[state.session.id]
  });
}

const mdp = dispatch => {
  return ({
    receiveCurrentAthlete: athlete => dispatch(receiveCurrentAthlete(athlete)),
    logout: () => dispatch(logout()),
    fetchActivities: () => dispatch(fetchActivities()),
    deleteActivity: id => dispatch(deleteActivity(id)),
    updateActivity: activity => dispatch(updateActivity(activity))
  });
};

export default connect(msp,mdp)(Dashboard);
