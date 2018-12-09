import React from "react";
import ActivityTableElement from "./activity_table_element";
import Header from "../header/header_container";

class ActivityIndex extends React.Component {
  componentDidMount(){
    this.props.fetchActivities();
  }

  render(){
    // debugger
    const activities = this.props.activities.map(activity => {
      return (
        <ActivityTableElement
          key={activity.id}
          activity={activity}
          deleteActivity={this.props.deleteActivity}/>
      )
    })

    return (
      <div>
        <Header />
        <div className="activities-index-body">
          <div className="my-activities-title">
            <div>{`My Activities`}</div>
          </div>
          <div className="num-activities">
            <div>
              {`${activities.length} Activities`}
            </div>
          </div>
          <table className="activities-table">
            <tbody>
              <tr>
                <th>Sport</th>
                <th>Title</th>
                <th>Time</th>
                <th>Distance</th>
                <th>Elevation</th>
                <th></th>
              </tr>
            </tbody>
            {activities}
          </table>
        </div>
      </div>
    )
  }
}

export default ActivityIndex;
