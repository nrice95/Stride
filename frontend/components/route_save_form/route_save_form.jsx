import React from "react";
import { withRouter } from "react-router-dom";

  class RouteSaveForm extends React.Component {
  constructor(props){
    super(props);
    debugger
    this.state = {
      polyline: this.props.polyline,
      activity_type: this.props.activityType,
      title: "",
      description: "",
      athlete_id: this.props.currentAthlete.id,
      centerLat: this.props.centerLat,
      centerLng: this.props.centerLng,
      distance: this.props.distance,
      current_date: new Date().toString()
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
    this.props.createRoute(this.state).then(thing => {
      // debugger
      this.props.history.push(`/route/${thing.route.id}`)
    }).then(this.props.closeModal);
    // debugger
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
            <input type="text" className="save-input" value={this.state.title} onChange={this.update("title")}/>
              <div className="route-save-label">{`Description`}
              </div>
            <textarea className="save-description" value={this.state.description} onChange={this.update("description")}></textarea>
          <div className="signup-submit-holder">
            <button className="cancel-route" onClick={this.props.closeModal}>Cancel</button>
            <button className="route-save-submit" type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
    )
  }
}

export default withRouter(RouteSaveForm);
