import React from "react";
import { activityData, parseDateTime } from "../../reducers/selectors";

const RouteIndexItem = ({route, currentAthlete}) => {
  return (
    <li>
      <div>
        {route.title}
      </div>
    </li>
  )
}

export default RouteIndexItem
