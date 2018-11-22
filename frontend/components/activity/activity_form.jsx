import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../header/header_container";

class ActivityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.activity;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      debugger
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e){
    debugger
    e.preventDefault();
    this.props.action({activity: this.state}).then(() => this.props.history.push("/activities"));
  }

  renderErrors(){
    if (this.props.errors.length > 0){
      return(
        <ul className="activity-errors">
          {this.props.errors.map((error,i) => (
            <li className="error-item" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      )
    }
  }

  render() {
    return (
      <div>
        <Header />
        <form className="activity-form" onSubmit={this.handleSubmit}>
          <div className="activity-form-title">Manual Entry</div>
          {this.renderErrors()}
          <div className="activity-row-one">
            <label>Distance
              <input className="distance-input" type="text" value={this.state.distance} onChange={this.update("distance")}/>
            </label>
            <label>Duration
              <div className="duration-boxes">
                <div className="dur-div">
                  <label className="dur-label">
                  </label>
                  <input className="dur-input" type="text" value={this.state.duration_hours} onChange={this.update("duration_hours")}/>
                </div>
                <div className="dur-div">
                  <label className="dur-label">
                  </label>
                  <input className="dur-input" type="text" value={this.state.duration_minutes} onChange={this.update("duration_minutes")}/>
                </div>
                <div className="dur-div">
                  <label className="dur-label">
                  </label>
                  <input className="dur-input" type="text" value={this.state.duration_seconds} onChange={this.update("duration_seconds")}/>
                </div>
              </div>
            </label>
          </div>
          <div className="activity-row-two">
            <label>Sport
              <select className="sport" onChange={this.update("activity_type")}>
                <option value="Run">Run</option>
                <option value="Ride">Ride</option>
              </select>
            </label>
            <label>Run Type
              <select className="type" onChange={this.update("type")}>
                <option value=""></option>
                <option value="Ride">Race</option>
                <option value="Run">Long Run</option>
                <option value="Ride">Workout</option>
              </select>
            </label>
            </div>
            <div className="activity-row-three">
              <label>Title
                <input className="title-input" placeholder="Daily run" type="text" value={this.state.title} onChange={this.update("title")}/>
              </label>
              <label>Description
                <textarea className="description-input" type="text" value={this.state.description} placeholder="How did it go? Where you tired or rested? How was the weather" onChange={this.update("description")}/>
              </label>
            </div>
          <div className="action-form-buttons">
            <input className="activity-submit" type="submit" value="Create"/>
            <a href="#/dashboard" className="action-cancel">Cancel</a>
          </div>
        </form>
      </div>
    )
  }
}

export default ActivityForm;
