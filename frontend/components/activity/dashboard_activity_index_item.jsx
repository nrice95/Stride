import React from "react";
import { Link } from "react-router-dom";

const ActivityIndexItem = ({ activity, currentAthlete }) => {
  debugger
  return (
    <li className="dashboard-activity">
      <div className="dashboard-avatar-column">
        <a href="#/athlete" className="dashboard-item-avatar">
          <div className="dashboard-item-initial">
            {currentAthlete.username.charAt(0).toUpperCase()}
          </div>
        </a>
      </div >
      <div className="dashboard-activity-summary">
        <a href="#/athlete" className="dashboard-item-name">
          {currentAthlete.username}
        </a>
        <a href="#/activities" className="dashboard-activity-title">
          {activity.title}
        </a>
        <div className="dashboard-workout-data">
          <div className="dashboard-distance">
            <div className="dashboard-distance-label">Distance</div>
            <div className="dashboard-distance-render">
              <div className="dashboard-distance-value">{activity.distance}</div>
              <div className="dashboard-distance-measurement">mi</div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ActivityIndexItem;
