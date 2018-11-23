import React from "react";
import { ActivityTableElement } from "./activity_table_element";
import Header from "../header/header_container";

class ActivityIndex extends React.Component {
  componentDidMount(){
    this.props.fetchActivities();
  }

  render(){
    debugger
    const activities = this.props.activities.map(activity => {
      return (
        <ActivityTableElement
          key={activity.id}
          activity={activity} />
      )
    })

    return (
      <div>
        <Header />
        <table className="activities-table">
          <tbody>
            <tr>
              <th>Sport</th>
              <th>Title</th>
              <th>Time</th>
              <th>Distance</th>
              <th>Elevation</th>
            </tr>
          </tbody>
          {activities}
        </table>
      </div>
    )
  }
}

export default ActivityIndex;
