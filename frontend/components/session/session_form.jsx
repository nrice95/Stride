import React from "react";
import { withRouter } from "react-router-dom";

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
    return(
      <ul className="auth-errors">
        {this.props.errors.map((error,i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render(){
    // debugger
    return(
      <div className="bg">
        // <a href="#" className="js-modal-open">{this.props.form}</a>
        <div className="login-form-container">
          <div className="login-title">
            {this.props.formType}
          </div>
          <div className="rendered-errors">
            {this.renderErrors()}
          </div>
          <form onSubmit={() => this.props.action(this.state)} className="login-form-box">
            <br></br>
            <div className="login-form">
              <label>
                <input type="text" placeholder="Username" value={this.state.username} onChange={this.updateUsername.bind(this)} className="login-input"/>
              </label>
              <label>
                <input type="password" placeholder="Password" value={this.state.password} onChange={this.updatePassword.bind(this)} className="login-input"/>
              </label>
              <button className="session-submit" type="submit">{this.props.formType}</button>
              <br></br>
            </div>
          </form>

        </div>
      </div>
    )
  }
}

export default withRouter(SessionForm)
