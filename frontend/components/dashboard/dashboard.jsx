import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import Header from "../dashboard_header/dashboard_header_container";
import ActivityIndexItem from "../activity/dashboard_activity_index_item";
import { findRelativeDay } from "../../reducers/selectors";

class Dashboard extends React.Component {
  componentDidMount(){
    this.props.fetchActivities();
  }

  constructor(props){
    super(props);
    //debugger
  }

  render(){
    //debugger
    const { currentAthlete, logout } = this.props;
    let activities = this.props.activities.reverse().map(activity => {
      return (
        <ActivityIndexItem
          key={activity.id}
          activity={activity}
          currentAthlete={currentAthlete}
          updateActivity={this.props.updateActivity}
          deleteActivity={this.props.deleteActivity} />
      )
      if (activities.length === 0) {
        activities = "No recent activities"
      }
    });
    let latestActivity = (activities.length === 0 ? {title: ""} : this.props.activities[0]);
    let relativeDay = findRelativeDay(latestActivity);
    // debugger
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
              <div className="activity-count-column">
                <div>{`Activities`}</div>
                <div>{activities.length}</div>
              </div>
              <div className="latest-activity-column">
                <div>{`Latest Activity`}</div>
                <a href={`#/activity/${latestActivity.id}`}>{`${latestActivity.title} • ${relativeDay}`}</a>
              </div>
              <a href="#/activities" className="your-training-log">
                <div>{`Your Training Log`}</div>
                <div>{`>`}</div>
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
