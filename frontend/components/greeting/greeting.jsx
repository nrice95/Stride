import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions";

class Greeting extends React.Component {
  render(){
    // debugger
    const { currentAthlete, logout } = this.props;
    // const currentAthlete = this.props.currentAthlete;
    // const logout = this.props.logout;
    if (!currentAthlete){
      // debugger
      return(
        <div>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      );
    }else{
      // debugger
      return(
        <div>
          <h3>{`${currentAthlete.username} signed in!`}</h3>
          <button className="header-button" onClick={logout}>Log Out</button>
        </div>
      );
    }
  }
}

export default Greeting;
