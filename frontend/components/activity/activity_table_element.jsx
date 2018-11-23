import React from "react";
import { renderTime } from "../../reducers/selectors";

const ActivityTableElement = ({activity}) => {
  const duration = renderTime(activity);


  return(
    <tr>
      <td>{activity.activity_type}</td>
      <td>{activity.title}</td>
      <td>{duration}</td>
      <td>{activity.distance}</td>
      <td>{activity.elevation}</td>
    </tr>
  )
}
