import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Signup",
    navLink: <Link to="/login">login instead</Link>
  };
};

const mdp = dispatch => {
  return ({
    action: athlete => dispatch(signup(athlete))
  })
}

export default connect(msp,mdp)(SessionForm);
