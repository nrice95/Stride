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
      <ul>
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
        <div className="login-form-container">
          <div className="login-title">
            {this.props.formType}
          </div>
          <form onSubmit={() => this.props.action(this.state)} className="login-form-box">
            <br></br>
            {this.renderErrors()}
            <div className="login-form">
              <label>
                <input type="text" placeholder="username" value={this.state.username} onChange={this.updateUsername.bind(this)} className="login-input"/>
              </label>
              <label>
                <input type="password" placeholder="password" value={this.state.password} onChange={this.updatePassword.bind(this)} className="login-input"/>
              </label>
              <button type="submit">{this.props.formType}</button>
              <br></br>
              {this.props.navLink}
            </div>
          </form>

        </div>
      </div>
    )
  }
}

export default withRouter(SessionForm)
