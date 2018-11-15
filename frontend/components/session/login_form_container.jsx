import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const msp = ({ errors }) => {
  debugger
  return {
    errors: errors,
    formType: "Log In",
    oppFormType: "Sign Up",
    navKey: "signup",
    navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mdp = dispatch => {
  // debugger
  return ({
    action: athlete => dispatch(login(athlete))
  })
}

export default connect(msp,mdp)(SessionForm);
