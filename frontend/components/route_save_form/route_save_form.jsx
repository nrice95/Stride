import React from "react";
import { withRouter } from "react-router-dom";

class RouteSaveForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      polyline: this.props.polyline,
      activity_type: "Run",
      title: "title",
      athlete_id: this.props.currentAthlete.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e){
    debugger
    e.preventDefault();
    this.props.createRoute(this.state).then(this.props.closeModal); //.then(this.props.history.push("/routes"));
    debugger
  }

  render() {
    return (
      <div>
        <div className="route-save-form">
          <div className="route-save-form-title">Save</div>
          <form className="save-form" onSubmit={this.handleSubmit}>
            <p>{`Enter a name and description for your route below.`}</p>
            <div className="route-save-label">{`Route Name (required)`}
            </div>
            <br></br>
            <input type="text" className="save-input" value={this.state.title} onChange={this.update("title")}/>
          <div className="signup-submit-holder">
            <button className="route-save-submit" type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
    )
  }
}

export default withRouter(RouteSaveForm);
