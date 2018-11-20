import React from "react";
import { Link } from "react-router-dom";


class Header extends React.Component {

  render(){
    // const route = this.props.currentAthlete.username.slice() || {polyline: ""};
    // mappy = this.refs.map;
    const { currentAthlete } = this.props
    return(
      <header className="dashboard-header">
        <div className="dashboard-header-items">
          <div className="left-items">
            <a href="#/dashboard" className="dashboard-stride-title">STRIDE</a>
            <ul className="dashboard-list">
              <li>
                <a href="#routes">Routes</a>
              </li>
              <li>
                <a href="#/dashboard">Activity Feed</a>
              </li>
            </ul>
          </div>
          <div className="right-items">
            <div className="dashboard-user">
              <a href="#/athlete" className="dashboard-header-avatar">
                <div className="dashboard-header-initial">
                  {currentAthlete.username.charAt(0).toUpperCase()}
                </div>
              </a>
            </div>
            <ul className="user-actions">
              <li>
                <a href="#/athlete">My Profile</a>
              </li>
              <li>
                <button className="header-button" onClick={this.props.logout}>Log Out</button>
              </li>
            </ul>
            <ul className="add-action">
              <li>
                <a href="#/map" className="dashboard-map-title">Map</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
