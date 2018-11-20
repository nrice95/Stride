import { RECEIVE_ACTIVITY, RECEIVE_ACTIVITIES, REMOVE_ACTIVITY } from "../actions/activity_actions";
import merge from "lodash/merge";

const ActivitiesReducer = (state ={}, action) => {
  debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ACTIVITIES:
      return merge({}, action.activities);
    case RECEIVE_ACTIVITY:
      return merge({}, state, {[action.activity.id]: action.activity});
    case REMOVE_ACTIVITY:
      let newState = merge({}, state);
      delete newState[action.activityId];
      return newState;
    default:
      return state;
  }
}

export default ActivitiesReducer;
