export const activityData = (activity) => {
  const unitAbbrs = {"kilometers": "km", "miles": "mi", "feet": "ft", "meters": "m", "yards": "yds"}

  let first_render = "";
  let first_render_title = "";

  let second_render = "";
  let second_render_title = "";

  let third_render = ""
  let third_render_title = "";

  if (activity.distance === 0){
    // first_render = `${activity.duration_hours}h ${activity.duration_minutes}m ${activity.duration_seconds}s`;
    first_render = renderTime(activity);
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
  // third_render = `${activity.duration_hours}h ${activity.duration_minutes}m ${activity.duration_seconds}s`;
  third_render = renderTime(activity);
  return {first_render, first_render_title, second_render, second_render_title, third_render, third_render_title};
}


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


const renderTime = (activity) => {
  let hours = activity.duration_hours;
  let minutes = activity.duration_minutes;
  let seconds = activity.duration_seconds;
  if (hours === 0 && minutes === 0 && seconds === 0){
    return `0h 0m 0s`;
  }else{
    let result = `${seconds}s`;
    if (minutes > 0){
      result = `${minutes}m ` + result;
      if (hours > 0){
        result = `${hours}h ` + result;
      }
    }
    return result
  }
}
