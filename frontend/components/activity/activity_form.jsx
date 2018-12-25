import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../header/header_container";

class ActivityForm extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = this.props.activity;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      // debugger
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    // if (this.props.formType === "Create"){
      // debugger
      let x = 5;
      this.props.action({activity: this.state}).then(thing => {
        this.props.history.push(`/activity/${thing.activity.id}`);
      })
    // }
  }

  componentDidMount() {
    // debugger
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
    // debugger
    return (
      <div>
        <Header />
        <form className="activity-form" onSubmit={this.handleSubmit}>
          <div className="activity-form-title">Manual Entry</div>
          {this.renderErrors()}
          <div className="activity-row-one">
            <label>Distance
              <div className="distance">
                <input className="distance-input" type="text" value={this.state.distance} onChange={this.update("distance")}/>
                <select className="distance-unit" onChange={this.update("distance_units")} value={this.state.distance_units}>
                  <option value="miles">miles</option>
                  <option value="kilometers">kilometers</option>
                  <option value="meters">meters</option>
                  <option value="yards">yards</option>
                </select>
              </div>
            </label>
            <label>{`Duration (h/m/s)`}
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
            <label>Elevation
              <div className="elevation">
                <input className="elevation-input" type="text" value={this.state.elevation} onChange={this.update("elevation")}/>
                <select className="elevation-unit" onChange={this.update("elevation_units")} value={this.state.elevation_units}>
                  <option value="feet">feet</option>
                  <option value="meters">meters</option>
                </select>
              </div>
            </label>
          </div>
          <div className="activity-row-two">
            <label>Sport
              <select className="sport" onChange={this.update("activity_type")} value={this.state.activity_type}>
                <option value="Run">Run</option>
                <option value="Ride">Ride</option>
              </select>
            </label>
            <label>Run Type
              <select className="type" onChange={this.update("run_type")} value={this.state.run_type}>
                <option value=""></option>
                <option value="Race">Race</option>
                <option value="Long Run">Long Run</option>
                <option value="Workout">Workout</option>
              </select>
            </label>
            <label>Date&Time
              <div className="datetime">
                <input type="date" onChange={this.update("date")} value={this.state.date}></input>
                <input type="time" onChange={this.update("time")} value={this.state.time}></input>
              </div>
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
            <input className="activity-submit" type="submit" value={this.props.formType}/>
            <a href="#/dashboard" className="action-cancel">Cancel</a>
          </div>
        </form>
      </div>
    )
  }
}

export default ActivityForm;
