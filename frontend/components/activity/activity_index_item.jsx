import React from "react";
import { Link } from "react-router-dom";

const ActivityIndexItem = ({ activity }) => {
  return(
    <div>
      <Link to={`/activity/${activity.id}`}>
      {activity.title}
    </Link>
    </div>
  )
}

export default ActivityIndexItem;
