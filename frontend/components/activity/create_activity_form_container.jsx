import { connect } from "react-redux";
import ActivityForm from "./activity_form";
import { createActivity } from "../../actions/activity_actions";
import { currentTime, currentDate } from "../../reducers/selectors";

const msp = (state, ownProps) => {
  const date = new Date();
  let month = date.getUTCMonth() + 1;
  if (month < 10) month = `0${month}`;
  let day = date.getDate();
  if (day < 10) day = `0${day}`;
  const currentDate = `${date.getUTCFullYear()}-${month}-${day}`
  let currentHour = `${date.getHours()}`;
  if (currentHour.length === 1) currentHour = "0" + currentHour;
  let currentMinute = `${date.getMinutes()}`;
  if (currentMinute.length === 1) currentMinute = "0" + currentMinute;
  const currentTime = `${currentHour}:${currentMinute}`;
  debugger
  return ({
    errors: state.errors,
    activity: {
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
      date: currentDate,
      time: currentTime
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
