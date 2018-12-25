import { RECEIVE_SIGNUP_ERRORS, RECEIVE_CURRENT_ATHLETE, RESET_SIGNUP_ERRORS} from "../actions/session_actions";

export default (state = [], action) => {
  debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SIGNUP_ERRORS:
      debugger
      return action.errors;
    case RESET_SIGNUP_ERRORS:
      return [];
    case RECEIVE_CURRENT_ATHLETE:
      return [];
    default:
      return state;
  }
};
