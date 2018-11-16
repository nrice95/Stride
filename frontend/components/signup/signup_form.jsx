import React from "react";
import { withRouter } from "react-router-dom";
import { openModal } from '../../actions/modal_actions';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  updateUsername(e){
    this.setState({username: e.target.value})
  }

  updatePassword(e){
    this.setState({password: e.target.value})
  }

  renderErrors(){
    if (this.props.errors.length > 0){
      return(
        <ul className="auth-errors">
          {this.props.errors.map((error,i) => (
            <li className="error-item" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      )
    }
  }

  render(){
    // debugger
    return(
      <div className="bg">

        <div className="signup-form-container">
          <div className="signup-title">
            {`Sign Up for free`}
          </div>
          <div className="signup-subtag">Join for the tracking. Stay for the community.</div>
          {this.renderErrors()}
          <form onSubmit={() => this.props.action(this.state)} className="signup-form-box">
            <br></br>
            <div className="signup-form">

                <div className="signup-username">Username</div>
                <input type="text" value={this.state.username} onChange={this.updateUsername.bind(this)} className="signup-input"/>

                <div className="signup-new-password">New Password</div>
                <input type="password" value={this.state.password} onChange={this.updatePassword.bind(this)} className="signup-input"/>

              <br></br>
            </div>
            <div className="signup-submit-holder">
              <button className="signup-submit" type="submit">{this.props.formType}</button>
            </div>
          </form>

        </div>
      </div>
    )
  }
}

export default withRouter(SessionForm)
