import { RECEIVE_CURRENT_ATHLETE } from '../actions/session_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_ATHLETE:
      return merge({}, state, { [action.athlete.id]: action.athlete });
    default:
      return state;
  }
};
