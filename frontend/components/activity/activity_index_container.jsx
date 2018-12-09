import { connect } from "react-redux";
import ActivityIndex from "./activity_index";
import { fetchActivities, deleteActivity, updateActivity } from "../../actions/activity_actions";

const msp = state => {
  return ({
    activities: Object.keys(state.activities).map(id => state.activities[id])
  });
}

const mdp = dispatch => {
  return ({
    fetchActivities: () => dispatch(fetchActivities()),
    deleteActivity: id => dispatch(deleteActivity(id)),
    updateActivity: activity => dispatch(updateActivity(activity))
  })
}

export default connect(msp,mdp)(ActivityIndex);
