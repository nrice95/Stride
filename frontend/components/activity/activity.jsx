import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header_container";
import { activityData, parseDateTime } from "../../reducers/selectors";

class ActivityShow extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.activity;
  }

  componentDidMount(){
    this.props.fetchActivity(this.props.match.params.activityId);
    this.props.fetchActivities();
  }

  alert(){
    if (confirm("Are you sure? Deleting an activity cannot be undone.")){
      this.props.deleteActivity(this.state.id).then(() => {
        // debugger
        this.props.history.push(`/dashboard`)
      })
    }
  }

  render(){
    const username = this.props.currentAthlete.username || ""
    const activity = this.props.activity || {activity: {title: "", activity_type: ""}};
    const activities = this.props.activities.map(activity => {
      return(
      <li>
        <a href={`#/activity/${activity.id}`}>
          {<strong>{activity.activity_type}</strong>}{` ${activity.title}`}
        </a>
      </li>
    )}) || [];
    let data;
    if (activity === {activity: {title: "", activity_type: ""}}){
      data = {first_render: "", first_render_title: "", second_render: "", second_render_title: "", third_render: "", third_render_title: ""};
    }
    data = activityData(activity);
    const first_render = data.first_render;
    const first_render_title = data.first_render_title;
    const second_render = data.second_render;
    const second_render_title = data.second_render_title;
    const third_render = data.third_render;
    const third_render_title = data.third_render_title;

    let dateT = ""
    if (typeof activity.date !== "undefined"){
      dateT = parseDateTime(activity, "show");;
      // debugger
    }
    let description;
    if (activity.description === ""){
      // debugger
      description = <a className="add-description" href={`#/activities/${this.props.match.params.activityId}/edit`}>Add a description</a>;
    }else{
      description = <div className="activity-description">{activity.description}</div>;
    }
    return(
      <div>
        <Header />
        <div className="activity-show">
          <div className="activity-body">
            <div className="activity-buttons">
              <button onClick={() => this.alert()}>Delete</button>
                <button onClick={() => this.props.history.push(`/activities/${this.props.activity.id}/edit`)}>Edit</button>
              </div>
          <div className="activity-field">
            <div className="activity-header">
              <a href="#/athlete">{`${username}`}</a> – {`${activity.activity_type}`}
            </div>
            <div className="activity-info">
              <div className="left-activity">
                <div className="left-activity-info">
                  <a href="#/athlete" className="activity-avatar">
                    <div className="activity-avatar-char">
                      {username.charAt(0).toUpperCase()}
                    </div>
                  </a>
                  <div className="activity-info-data">
                    <div className="show-dateT">{dateT}</div>
                    <div className="activity-title">{activity.title}</div>
                    {description}
                  </div>
                </div>
                <div className="bottom-bar"></div>
              </div>
              <div className="right-activity">
                <div className="right-activity-info">
                  <div>
                    <div className="first-render">{first_render}</div>
                    <div className="first-render-title">{first_render_title}</div>
                  </div>
                  <div>
                    <div className="third-render">{third_render}</div>
                    <div className="third-render-title">{third_render_title}</div>
                  </div>
                  <div>
                    <div className="second-render">{second_render}</div>
                    <div className="second-render-title">{second_render_title}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="activity-footer">
          <div className="activity-footer-elements">
            <div>
              Your Recent Activities
            </div>
            <ul>
              {activities.slice(0,6)}
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default ActivityShow;
