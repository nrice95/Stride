import React from "react";
import { Link } from "react-router-dom";
import { logout } from '../../actions/session_actions';


class Header extends React.Component {

  render(){
    // const route = this.props.currentAthlete.username.slice() || {polyline: ""};
    // mappy = this.refs.map;
    const { currentAthlete } = this.props
    return(
      <header className="dashboard-header">
        <nav className="dashboard-header-items">
          <ul className="left-items">
            <a href="#/dashboard" className="dashboard-stride-title">STRIDE</a>
            <li>
              <a href="#/dashboard" className="left-dashboard-list">Dashboard</a>
              <ul className="dashboard-list">
                <li className="routes-li">
                  <a href="#/dashboard">Activity Feed</a>
                </li>
                <li>
                  <a href="#routes">Routes</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#/activities" className="left-dashboard-list">Training</a>
              <ul className="training-list">
                <li>
                  <a href="#activities">My Activities</a>
                </li>
              </ul>
            </li>
          </ul>



          <div className="right-items">
            <a href="#/athlete" className="dashboard-header-avatar">
              <div className="dashboard-header-initial">
                {currentAthlete.username.charAt(0).toUpperCase()}
              </div>
            </a>
            <ul className="dashboard-user">
              <ul className="user-actions">
                <li>
                  <a href="#/athlete">My Profile</a>
                </li>
                <li>
                  <button className="header-button" onClick={this.props.logout}>Log Out</button>
                </li>
              </ul>
            </ul>
            <ul className="add-action">
              <li>
                <a href="#/map" className="dashboard-map-title">Create a route</a>
              </li>
              <li>
                <a href="#/activity/new" className="dashboard-activity-title">Add manual entry</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;
