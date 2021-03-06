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

export const parseItemForSort = (item) => {
  if (item.polyline === undefined){
    return activityParse(item);
  }else{
    return routeParse(item);
  }
}

const activityParse = (activity) => {
  // debugger
  const tmpTime = activity.created_at.split(new RegExp('(T|Z)'));
  return new Date(tmpTime[0] + " " + tmpTime[2]).getTime();
}

const routeParse = (route) => {
  if (route.current_date === null){
    const tmpTime = route.created_at.split(new RegExp('(T|Z)'));
    return new Date(tmpTime[0] + " " + tmpTime[2]).getTime();
  }else{
    return new Date(route.current_date).getTime();
  }
}

const parseDate = (date) => {
  // debugger
  const splitDate = date.split("-");
  const month = months[splitDate[1]];
  return `${month} ${splitDate[2]}, ${splitDate[0]}`
}

export const findRelativeDay = (activity) => {
  // debugger
  if (activity.title === "") return "";
  const currentDate = new Date();
  const startOfToday = new Date(currentDate.toDateString() + " 00:00")
  const activityDate = new Date(activity.date + " " + activity.time);
  if (startOfToday - activityDate <= 0){
    return "Today"
  }else if (startOfToday - activityDate <= 86400000){
    return "Yesterday"
  }else{
    return parseDate(activity.date);
  }
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


export const renderTime = (activity) => {
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

const months = {"01": "January", "02": "February", "03": "March", "04": "April", "05": "May", "06": "June", "07": "July", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December"}

export const currentDate = () => {
  const date = new Date();
  return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getDate}`
}

export const currentTime = () => {
  const time = new Date();
  return `${date.getMinutes()}:${date.getHours()}`
}

export const parseRouteDate = (routeDate) => {
  if (typeof routeDate === "undefined") return "";
  const date = new Date(routeDate);
  // debugger
  let month = (date.getMonth()+1).toString();
  if (month.length === 1) month = "0" + month;
  month = months[month];
  const day = date.getDate();
  const year = date.getUTCFullYear();
  return `${month} ${day}, ${year}`;
}

export const parseRouteTime = (routeDate) => {
  if (typeof routeDate === "undefined") return "";
  const time = new Date(routeDate);
  let minutes = `${time.getMinutes()}`;
  if (minutes.length === 1) minutes = "0" + minutes;
  let hour = time.getHours();
  let meridian = "AM";
  if (hour > 12){
    hour = hour - 12;
    meridian = "PM"
  }
  return `${hour}:${minutes} ${meridian}`;
}

export const parseDateTime = (activity, type) => {
  let dateString = activity.date.split("-");
  let year = dateString[0];
  let day = dateString[2];
  let month = months[dateString[1]];
  let date = `${month} ${day}, ${year}`;

  let timeString = activity.time.split(":");
  let hour = timeString[0];
  let minute = timeString[1];
  let ampm;

  let hourInt = parseInt(hour);
  if (hourInt > 12){
    ampm = "PM";
    hour = (hourInt-12).toString();
  }else{
    ampm = "AM";
  }
  let time = `${hour}:${minute} ${ampm}`;

  if (type === "index"){
  return `${date} at ${time}`;
}else{
  return `${time} on ${date}`;
}
}
