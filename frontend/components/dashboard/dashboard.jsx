import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import Header from "../header/header_container";
import ActivityIndexItem from "../activity/dashboard_activity_index_item";

class Dashboard extends React.Component {
  componentDidMount(){
    //debugger
    // this.props[this.props.match.params.id];
    this.props.fetchActivities();
  }

  constructor(props){
    super(props);
    //debugger
  }

  render(){
    //debugger
    const { currentAthlete, logout } = this.props;
    let activities = this.props.activities.reverse().slice(0,6).map(activity => {
      return (
        <ActivityIndexItem
          key={activity.id}
          activity={activity}
          currentAthlete={currentAthlete} />
      )
      if (activities.length === 0) {
        activities = "No recent activities"
      }
    });
    return(
      <div className="dashboard">
        <Header />
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
            <ul className="activities-list">
              {activities}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
