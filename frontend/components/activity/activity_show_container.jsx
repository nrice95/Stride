import { connect } from "react-redux";
import ActivityShow from "./activity";
import { fetchActivity } from "../../actions/activity_actions";

const msp = (state, ownProps) => {
  return({
    currentAthlete: state.entities.athletes[state.session.id],
    activity: state.entities.activities[ownProps.match.params.activityId]
  });
};

const mdp = dispatch => {
  return({
    fetchActivity: id => dispatch(fetchActivity(id))
  })
}

export default connect(msp,mdp)(ActivityShow);
