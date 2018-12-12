import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import Header from "../dashboard_header/dashboard_header_container";
import ActivityIndexItem from "../activity/dashboard_activity_index_item";
import DashboardRouteIndexItem from "../route_index/dashboard_route_index_item";
import { findRelativeDay } from "../../reducers/selectors";

class Dashboard extends React.Component {
  componentDidMount(){
    debugger
    this.props.fetchActivities();
    this.props.fetchRoutes();
  }

  constructor(props){
    super(props);
    //debugger
  }

  render(){
    let numActivities = 0;
    let recentActivity = this.props.activities[0] || {date: "", time: ""};
    debugger
    let recentTime = new Date(recentActivity.date + " " + recentActivity.time).getTime() || 0;
    const { currentAthlete, logout } = this.props;
    let routes = this.props.routes;
    let activities = this.props.activities;
    let dashboardItems = routes.concat(activities);
    dashboardItems = dashboardItems
    // .sort((a,b) => {
    //   const aDate = new Date(a.date + " " + a.time).getTime();
    //   const bDate = new Date(b.date + " " + b.time).getTime();
    //   debugger
    //   return bDate - aDate;
    // })
    .sort((a,b) => {
      const newTime = new Date(b.date + " " + b.time).getTime();
      if (newTime > recentTime) {
        recentActivity = b;
        recentTime = newTime;
      }
      const aTmp = a.created_at.split(new RegExp('(T|Z)'));
      const bTmp = b.created_at.split(new RegExp('(T|Z)'));
      const aDate = new Date(a[0] + " " + a[3]).getTime();
      const bDate = new Date(b[0] + " " + b[3]).getTime();

      return bDate-aDate;
    })
    // .reverse()
    .map(item => {
      // debugger
      if (item.polyline !== undefined){
        return (
          <DashboardRouteIndexItem
            key={item.id}
            route={item}
            currentAthlete={currentAthlete}
            refs={this.refs.map} />
        )
      }else{
        numActivities++;
        return (
          <ActivityIndexItem
            key={item.id}
            activity={item}
            currentAthlete={currentAthlete}
            updateActivity={this.props.updateActivity}
            deleteActivity={this.props.deleteActivity} />
        )
      }
      if (activities.length === 0) {
        activities = "No recent activities"
      }
    });
    let latestActivity = (activities.length === 0 ? {title: ""} : recentActivity);
    let relativeDay = findRelativeDay(latestActivity);
    // debugger
    debugger
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
                <div>{numActivities}</div>
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
              {dashboardItems}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
