import { OPEN_USER_MODAL, OPEN_ROUTE_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import merge from "lodash/merge";

export default function modalReducer(state = {}, action) {
  // debugger
  switch (action.type) {
    case OPEN_ROUTE_MODAL:
      return merge({}, {modalType: action.modal, polyline: action.polyline, centerLat: action.centerLat, centerLng: action.centerLng, distance: action.distance, activityType: action.activityType});
    case OPEN_USER_MODAL:
      // debugger
        return merge({}, {modalType: action.modal});
    case CLOSE_MODAL:
    // debugger
      return {};
    default:
      return state;
  }
}
