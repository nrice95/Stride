import React from "react";
import { renderTime } from "../../reducers/selectors";

class ActivityTableElement extends React.Component {
  constructor(props){
    super(props);
    debugger
    this.state = this.props.activity;
  }


  alert(){
    if (confirm("Are you sure? Deleting an activity cannot be undone.")){
      this.props.deleteActivity(this.state.id).then(() => {
        debugger
        this.props.history.push(`/dashboard`)
      })
    }
  }

  render(){
    const duration = renderTime(this.state);
    return(
      <tbody className="index-table-element">
        <tr>
          <td>{this.state.activity_type}</td>
          <td><a href={`#/activity/${this.state.id}`}>{this.state.title}</a></td>
          <td>{duration}</td>
          <td>{this.state.distance} {this.state.distance_units}</td>
          <td>{this.state.elevation}</td>
          <td>
            <a href={`#/activities/${this.state.id}/edit`}>Edit</a>
            <button onClick={() => this.alert()}>Delete</button>
          </td>
        </tr>
      </tbody>
    )
  }
}

export default ActivityTableElement;
