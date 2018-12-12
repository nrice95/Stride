import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../signup/signup_form_container';
import RouteSaveForm from "../route_save_form/route_save_form_container";

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  // debugger
  switch (modal) {
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case "saveRoute":
      component = <RouteSaveForm />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  // debugger
  return {
    errors: state.errors,
    modal: state.ui.modal.modalType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
