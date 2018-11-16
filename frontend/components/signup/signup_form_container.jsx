import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";
import SignupForm from "./signup_form";


const msp = ({ errors }) => {
  // debugger
  return {
    errors,
    formType: "Sign Up",
    oppFormType: "Log In",
    navKey: "login",
    navLink: <Link to="/login">login instead</Link>
  };
};

const mdp = dispatch => {
  return ({
    action: athlete => dispatch(signup(athlete)),
    openModal: modal => dispatch(openModal(modal)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(msp,mdp)(SignupForm);
