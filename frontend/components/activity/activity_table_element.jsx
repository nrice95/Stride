import React from "react";
import { renderTime } from "../../reducers/selectors";

export const ActivityTableElement = ({activity}) => {
  const duration = renderTime(activity);

  return(
    <tbody className="index-table-element">
      <tr>
        <td>{activity.activity_type}</td>
        <td><a href={`#/activity/${activity.id}`}>{activity.title}</a></td>
        <td>{duration}</td>
        <td>{activity.distance}</td>
        <td>{activity.elevation}</td>
      </tr>
    </tbody>
  )
}
