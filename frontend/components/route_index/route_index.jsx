import React from "react";
import RouteIndexItem from "./route_index_item";
import Header from "../header/header_container";

class RouteIndex extends React.Component {
  componentDidMount(){
    this.props.fetchRoutes();
  }

  render(){
    const routes = this.props.routes.map(route => {
      return (
        <RouteIndexItem
          key={route.id}
          route={route} />
      );
    });

    return (
      <div>
        <Header />
        <a href="#/map">Create Route</a>
        <ul>
          {routes}
        </ul>
      </div>
    )
  }
}

export default RouteIndex;
