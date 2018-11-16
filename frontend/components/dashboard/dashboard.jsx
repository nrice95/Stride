import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions";

class Dashboard extends React.Component {
  componentDidMount(){
    //debugger
    // this.props[this.props.match.params.id];
  }

  constructor(props){
    super(props);
    //debugger
  }

  render(){
    //debugger
    const { currentAthlete, logout } = this.props
    return(
      <div className="dashboard">
        <header className="dashboard-header">
          <div className="dashboard-header-items">
            <a href="#/dashboard" className="dashboard-stride-title">STRIDE</a>
          </div>
          <button className="header-button" onClick={logout}>Log Out</button>
        </header>
        <div className="dashboard-body">
          <div className="summary-column">
            <div className="dashboard-profile-summary">
              <a href="#/athlete" className="summary-avatar">
                <div className="summary-avatar-char">
                  {currentAthlete.username.charAt(0).toUpperCase()}
                </div>
              </a>
              <a href="#/athlete" className="dashboard-username">
                {currentAthlete.username}
              </a>
            </div>
          </div>
          <div className="activities-feed">
            Activities go here
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
