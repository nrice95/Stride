import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_ATHLETE} from "../actions/session_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      // debugger
      return action.errors;
    case RECEIVE_CURRENT_ATHLETE:
      return [];
    default:
      return state;
  }
};
