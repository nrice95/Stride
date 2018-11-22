import React from "react";
import { Link } from "react-router-dom";

const RouteIndexItem = ({ route }) => {
  return (
    <li>
      <Link to={`/route/${route.id}`}>
        {route.title}
      </Link>&nbsp;
    </li>
  )
}

export default RouteIndexItem;
