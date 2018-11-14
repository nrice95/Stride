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
    debugger
    return(
      <div className="login-form-container">
        <form onSubmit={() => this.props.action(this.state)} className="login-form-box">
          {this.props.formType}
          <br></br>
          {this.renderErrors()}
          <div className="login-form">
            <label>{`Username `}
              <input type="text" value={this.state.username} onChange={this.updateUsername.bind(this)} className="login-input"/>
            </label>
            <label>{`Password `}
              <input type="password" value={this.state.password} onChange={this.updatePassword.bind(this)} className="login-input"/>
            </label>
            <button type="submit">Submit</button>
            <br></br>
            {this.props.navLink}
          </div>
        </form>

      </div>
    )
  }
}

export default withRouter(SessionForm)
