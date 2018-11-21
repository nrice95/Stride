import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import Header from "../header/header_container";
import ActivityIndexItem from "../activity/activity_index_item";

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
    const activities = this.props.activities.map(activity => {
      return (
        <ActivityIndexItem
          key={activity.id}
          activity={activity} />
      )
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
            Activities go here
            <ul>
              {activities}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
