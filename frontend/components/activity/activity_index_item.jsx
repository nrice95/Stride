import React from "react";
import { Link } from "react-router-dom";

const ActivityIndexItem = ({ activity }) => {
  return (
    <li>
      <Link to={`/activity/${activity.id}`}>
        {activity.title}
      </Link>
    </li>
  )
}

export default ActivityIndexItem;
