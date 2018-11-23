import React from "react";
import { renderTime } from "../../reducers/selectors";

export const ActivityTableElement = ({activity}) => {
  const duration = renderTime(activity);

  return(
    <tbody>
      <tr>
        <td>{activity.activity_type}</td>
        <td>{activity.title}</td>
        <td>{duration}</td>
        <td>{activity.distance}</td>
        <td>{activity.elevation}</td>
      </tr>
    </tbody>
  )
}
