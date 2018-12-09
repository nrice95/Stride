import React from "react";
import { connect } from "react-redux";
import ActivityForm from "./activity_form";
import { fetchActivity, updateActivity } from "../../actions/activity_actions";

const msp = (state, ownProps) => {
  const defaultActivity = {
    title: "",
    description: "",
    activity_type: "Run",
    distance: 0,
    distance_units: "miles",
    duration_hours: 0,
    duration_minutes: 0,
    duration_seconds: 0,
    run_type: "",
    athlete_id: state.session.id,
    elevation: 0,
    elevation_units: "feet",
    date: "",
    time: ""
  };
  debugger

  const activity = state.activities[ownProps.match.params.activityId] || defaultActivity;

  return { activity, formType: "Update", errors: state.errors  }
}

const mdp = dispatch => {
  return ({
    fetchActivity: id => dispatch(fetchActivity(id)),
    action: activity => dispatch(updateActivity(activity))
  })
}

export default connect(msp, mdp)(ActivityForm);
// class EditActivityForm extends React.Component {
//   componentDidMount(){
//     debugger
//     this.props.fetchActivity(this.props.match.params.activityId);
//   }
//
//   componentDidUpdate(prevProps) {
//     debugger
//     if (prevProps.activity.id != this.props.match.params.activityId){
//       this.props.fetchActivity(this.props.match.params.activityId);
//     }
//   }
//
//   render(){
//     debugger
//     const { action, formType, activity, errors } = this.props;
//     return (
//       <ActivityForm
//         action={action}
//         formType={formType}
//         activity={activity}
//         errors={errors} />
//     )
//   }
// }
