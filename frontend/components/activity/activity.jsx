import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header_container";

class ActivityShow extends React.Component {
  componentDidMount(){
    this.props.fetchActivity(this.props.match.params.activityId);
  }

  render(){
    const username = this.props.currentAthlete.username || ""
    const activity = this.props.activity || {activity: {title: "", activity_type: ""}};
    return(
      <div>
        <Header />
        {activity.title}<br></br>
        {username}
      </div>
    )
  }
}

export default ActivityShow;
