import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openUserModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => {
  // debugger
  return {
  logout: () => dispatch(logout()),
  openUserModal: modal => dispatch(openUserModal(modal))
}};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
