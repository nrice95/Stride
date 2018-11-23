import React from "react";
import { Link } from "react-router-dom";
import { activityData, parseDateTime } from "../../reducers/selectors";

const ActivityIndexItem = ({ activity, currentAthlete }) => {
  const data = activityData(activity);
  const first_render = data.first_render;
  const first_render_title = data.first_render_title;
  const second_render = data.second_render;
  const second_render_title = data.second_render_title;
  const third_render = data.third_render;
  const third_render_title = data.third_render_title;

  const dateT = parseDateTime(activity,"index");
  // debugger
  return (
    <li className="dashboard-activity">
      <div className="dashboard-activity-content">
        <div className="dashboard-avatar-column">
          <a href="#/athlete" className="dashboard-item-avatar">
            <div className="dashboard-item-initial">
              <div>{currentAthlete.username.charAt(0).toUpperCase()}</div>
            </div>
          </a>
        </div >
        <div className="dashboard-activity-summary">
          <a href="#/athlete" className="dashboard-item-name">
            {currentAthlete.username}
            <div className="dashboard-dateT">{dateT}</div>
          </a>
          <a href={`#/activity/${activity.id}`} className="dashboard-activity-title">
            {activity.title}
          </a>
          <div className="dashboard-workout-data">
            <div className="dashboard-datum">
              <div className="dashboard-datum-label">{`${first_render_title}`}</div>
              <div className="dashboard-datum-value">{`${first_render}`}</div>
            </div>
            <div className="dashboard-datum">
              <div className="dashboard-datum-label">{`${second_render_title}`}</div>
              <div className="dashboard-datum-value">{`${second_render}`}</div>
            </div>
            <div className="dashboard-datum">
              <div className="dashboard-datum-label">{`${third_render_title}`}</div>
              <div className="dashboard-datum-value">{`${third_render}`}</div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ActivityIndexItem;
