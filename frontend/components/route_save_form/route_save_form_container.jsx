import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { createRoute } from "../../actions/route_actions";
import RouteSaveForm from "./route_save_form";
import { closeModal } from "../../actions/modal_actions";

const msp = state => {
  // debugger
  return({
    polyline: state.ui.modal.polyline,
    currentAthlete: state.entities.athletes[state.session.id],
    centerLat: state.ui.modal.centerLat,
    centerLng: state.ui.modal.centerLng,
    distance: state.ui.modal.distance,
    activityType: state.ui.modal.activityType,
  })
}

const mdp = dispatch => {
  return ({
    createRoute: route => dispatch(createRoute(route)),
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(msp,mdp)(RouteSaveForm)
