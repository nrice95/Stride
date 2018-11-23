import React from "react";
import { Link } from "react-router-dom";
import { logout } from '../../actions/session_actions';


class Header extends React.Component {

  render(){
    // const route = this.props.currentAthlete.username.slice() || {polyline: ""};
    // mappy = this.refs.map;
    const { currentAthlete } = this.props
    return(
      <header className="dashboard-dashboard-header">
        <nav className="dashboard-dashboard-header-items">
          <ul className="dashboard-left-items">
            <a href="#/dashboard" className="dashboard-dashboard-stride-title">STRIDE</a>
            <li>
              <a href="#/dashboard" className="dashboard-left-dashboard-list">Dashboard</a>
              <ul className="dashboard-dashboard-list">
                <li className="dashboard-routes-li">
                  <a href="#/dashboard">Activity Feed</a>
                </li>
                <li>
                  <a href="#routes">Routes</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#/activities" className="dashboard-left-dashboard-list">Training</a>
              <ul className="dashboard-training-list">
                <li>
                  <a href="#activities">My Activities</a>
                </li>
              </ul>
            </li>
          </ul>



          <ul className="dashboard-right-items">
            <li className="dashboard-avatar-dropdown">
              <div className="dashboard-header-avatar-container">
                <a href="#/athlete" className="dashboard-dashboard-header-avatar">
                  <div className="dashboard-dashboard-header-initial">
                    {currentAthlete.username.charAt(0).toUpperCase()}
                  </div>
                </a>
              </div>
              <ul className="dashboard-user-actions">
                <li>
                  <a href="#/athlete">My Profile</a>
                </li>
                <li className="dashboard-logout-li">
                  <button className="dashboard-header-button" onClick={this.props.logout}>Log Out</button>
                </li>
              </ul>
            </li>


            <li className="avis-class">
              <a>{`+`}</a>
              <ul className="dashboard-add-action">
                <li>
                  <a href="#/route/new" className="dashboard-dashboard-map-title">Create a route</a>
                </li>
                <li>
                  <a href="#/activity/new" className="dashboard-header-new-activity">Add manual entry</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
