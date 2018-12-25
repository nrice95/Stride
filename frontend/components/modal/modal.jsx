import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { resetSignupErrors } from "../../actions/session_actions";
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../signup/signup_form_container';
import RouteSaveForm from "../route_save_form/route_save_form_container";

function handleClose(close, errors, componentType, reset){
  debugger
  close();
  if (componentType === "signup"){
    reset();
  }
}

function Modal({errors, modal, closeModal, resetSignupErrors}) {
  debugger
  if (!modal) {
    return null;
  }
  let component;
  let componentType;
  // debugger
  switch (modal) {
    case 'signup':
    componentType = "signup";
      component = <SignupFormContainer errors={[]}/>;
      break;
    case "saveRoute":
      componentType = "saveRoute";
      component = <RouteSaveForm />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={() => handleClose(closeModal, errors, componentType, resetSignupErrors)}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  debugger
  return {
    errors: {signupErrors: state.signupErrors},
    modal: state.ui.modal.modalType
  };
};

const mapDispatchToProps = dispatch => {
  debugger
  return {
    closeModal: () => dispatch(closeModal()),
    resetSignupErrors: () => dispatch(resetSignupErrors())

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
