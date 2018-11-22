import { connect } from "react-redux";
import ActivityForm from "./activity_form";
import { createActivity } from "../../actions/activity_actions";

const msp = (state, ownProps) => {
  return ({
    errors: state.errors,
    activity: {
      title: "",
      description: "",
      activity_type: "Run",
      distance: 0,
      duration_hours: 1,
      duration_minutes: 0,
      duration_seconds: 0,
      type: "",
      athlete_id: state.session.id
    },
    formType: "Create",
  })
}

const mdp = dispatch => {
  return ({
    action: activity => dispatch(createActivity(activity))
  })
}

export default connect(msp,mdp)(ActivityForm);
