import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openUserModal } from '../../actions/modal_actions';

const msp = ({ sessionErrors }) => {
  debugger
  return {
    errors: sessionErrors,
    formType: "Log In",
    oppFormType: "Sign Up",
    navKey: "signup",
    navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mdp = dispatch => {
  // debugger
  return ({
    action: athlete => dispatch(login(athlete)),
    openUserModal: (modal, errors) => dispatch(openUserModal(modal, errors))
  })
}

export default connect(msp,mdp)(SessionForm);
