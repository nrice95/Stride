import React from "react";
import ActivityIndexItem from "./activity_index_item";
import Header from "../header/header_container";

class ActivityIndex extends React.Component {
  componentDidMount(){
    this.props.fetchActivities();
  }

  render(){
    debugger
    const activities = this.props.activities.map(activity => {
      return (
        <ActivityIndexItem
          key={activity.id}
          activity={activity} />
      )
    })

    return (
      <div>
        <Header />
        <ul>
          {activities}
        </ul>
      </div>
    )
  }
}

export default ActivityIndex;
