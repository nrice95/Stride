import merge from 'lodash/merge';

import { RECEIVE_ROUTE, RECEIVE_ROUTES } from "../actions/route_actions";
import { OPEN_ROUTE_MODAL } from "../actions/modal_actions";

export default (state ={}, action) => {
  // debugger
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_ROUTES:
      return action.routes;
    case RECEIVE_ROUTE:
      // debugger
      const newRoute = { [action.route.id]: action.route };
      return merge({}, state, newRoute);
    default:
      return state;
  }
}
