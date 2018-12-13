import { connect } from "react-redux";
import ActivityShow from "./activity";
import { fetchActivity, deleteActivity, updateActivity, fetchActivities } from "../../actions/activity_actions";

const msp = (state, ownProps) => {
  return({
    currentAthlete: state.entities.athletes[state.session.id],
    activity: state.entities.activities[ownProps.match.params.activityId],
    activities: Object.keys(state.activities).map(id => state.activities[id])
  });
};

const mdp = dispatch => {
  return({
    fetchActivities: () => dispatch(fetchActivities()),
    fetchActivity: id => dispatch(fetchActivity(id)),
    deleteActivity: id => dispatch(deleteActivity(id)),
    updateActivity: activity => dispatch(updateActivity(activity))
  })
}

export default connect(msp,mdp)(ActivityShow);
