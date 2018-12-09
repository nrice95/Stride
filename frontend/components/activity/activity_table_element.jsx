import React from "react";
import { renderTime } from "../../reducers/selectors";

class ActivityTableElement extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.activity;
  }




  render(){
    const alert = () => {
      if (confirm("Are you sure? Deleting an activity cannot be undone.")){
        this.props.deleteActivity(this.state.id)
      }
    }
    const duration = renderTime(this.state);
    return(
      <tbody className="index-table-element">
        <tr>
          <td>{this.state.activity_type}</td>
          <td><a href={`#/activity/${this.state.id}`}>{this.state.title}</a></td>
          <td>{duration}</td>
          <td>{this.state.distance}</td>
          <td>{this.state.elevation}</td>
          <td>
            <a href={`#/activities/${this.state.id}/edit`}>edit</a>
            <button onClick={() => alert()}>delete</button>
          </td>
        </tr>
      </tbody>
    )
  }
}

export default ActivityTableElement;
