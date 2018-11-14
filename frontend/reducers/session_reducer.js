import { RECEIVE_CURRENT_ATHLETE, LOGOUT_CURRENT_ATHLETE } from "../actions/session_actions";
const defaultState = { currentAthleteId: null };

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_ATHLETE:
      return { currentAthleteId: action.athlete.id };
    case LOGOUT_CURRENT_ATHLETE:
      return defaultState;
    default:
      return state;
  }
};
