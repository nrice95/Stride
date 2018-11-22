import React from "react";
import { Link } from "react-router-dom";

const calculatePace = (distance,time) => {
  let minutes = Math.floor(time/distance);
  let seconds = (time/distance)%1;
  seconds = seconds*60;
  seconds = Math.ceil(seconds);
  let secondsString = seconds.toString();
  if (secondsString.length === 1){
    secondsString = "0" + secondsString;
  }
  let hours = Math.floor(minutes/60);
  minutes = minutes % 60;
  let minutesString = minutes.toString();
  let hoursString = hours.toString();
  if (hours > 0){
    if (minutesString.length === 1){
      minutesString = "0" + minutesString;
    }return hoursString + ":" + minutesString + ":" + secondsString;
  }else{
    return minutesString + ":" + secondsString;
  }
}

//in minutes
const timeToFloat = (hours,minutes,seconds) => {
  return (60 * hours) + minutes + Math.round((seconds/60)*100)/100;
}

// const formatTime = (hours,minutes,seconds) => {
//   let result = "";
//   if (hours > 0){
//     result += `${hours}h`
//   }if (minutes > 0 || result.length > 0){
//     let minutesString = minutes.toString();
//     if
//   }
// }

const ActivityIndexItem = ({ activity, currentAthlete }) => {
  const unitAbbrs = {"kilometers": "km", "miles": "mi", "feet": "ft", "meters": "m", "yards": "yds"}
  debugger

  let first_render = "";
  let first_render_title = "";

  let second_render = "";
  let second_render_title = "";

  let third_render = ""
  let third_render_title = "";

  if (activity.distance === 0){
    first_render = `${activity.duration_hours}h ${activity.duration_minutes}m ${activity.duration_seconds}s`;
    first_render_title = "Time";
    second_render = `${activity.elevation} ${unitAbbrs[activity.elevation_units]}`;
    second_render_title = "Elevation Gain";
    third_render_title = "Elapsed Time"

  }else{
    first_render = `${Math.round(activity.distance*100)/100} ${unitAbbrs[activity.distance_units]}`;
    first_render_title = "Distance";
    second_render = calculatePace(activity.distance,timeToFloat(activity.duration_hours,activity.duration_minutes,activity.duration_seconds)) + ` /${unitAbbrs[activity.distance_units]}`;
    second_render_title = "Pace"
    third_render_title = "Time"
  }
  third_render = `${activity.duration_hours}h ${activity.duration_minutes}m ${activity.duration_seconds}s`;



  return (
    <li className="dashboard-activity">
      <div className="dashboard-activity-content">
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
