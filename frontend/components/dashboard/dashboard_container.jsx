import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { receiveCurrentAthlete } from "../../actions/session_actions";
import { logout } from '../../actions/session_actions';
import { fetchActivities } from "../../actions/activity_actions";
import { fetchRoutes } from "../../actions/route_actions";


const msp = state => {
  // debugger
  return ({
    activities: Object.keys(state.activities).map(id => state.activities[id]),
    currentAthlete: state.entities.athletes[state.session.id],
    routes: Object.keys(state.routes).map(id => state.routes[id])
  });
}

const mdp = dispatch => {
  return ({
    receiveCurrentAthlete: athlete => dispatch(receiveCurrentAthlete(athlete)),
    logout: () => dispatch(logout()),
    fetchActivities: () => dispatch(fetchActivities()),
    fetchRoutes: () => dispatch(fetchRoutes()),
    deleteActivity: id => dispatch(deleteActivity(id)),
    updateActivity: activity => dispatch(updateActivity(activity))
  });
};

export default connect(msp,mdp)(Dashboard);
