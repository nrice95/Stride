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
        <form onSubmit={this.handleSubmit}>
          <Header />
          {this.renderErrors()}
          <label>Distance
            <input type="text" value={this.state.distance} onChange={this.update("distance")}/>
          </label>
          <label>Duration
            <input type="text" value={this.state.duration_hours} onChange={this.update("duration_hours")}/>
            <input type="text" value={this.state.duration_minutes} onChange={this.update("duration_minutes")}/>
            <input type="text" value={this.state.duration_seconds} onChange={this.update("duration_seconds")}/>
          </label>
          <label>Sport
            <input type="text" value={this.state.activity_type} onChange={this.update("activity_type")}/>
          </label>
          <label>Title
            <input type="text" value={this.state.title} onChange={this.update("title")}/>
          </label>
          <label>Description
            <textarea type="text" value={this.state.description} onChange={this.update("description")}/>
          </label>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default ActivityForm;
