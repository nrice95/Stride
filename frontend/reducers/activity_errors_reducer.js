import { RECEIVE_ACTIVITY_ERRORS} from "../actions/activity_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ACTIVITY_ERRORS:
      // debugger
      return action.errors;
    default:
      return state;
  }
};
