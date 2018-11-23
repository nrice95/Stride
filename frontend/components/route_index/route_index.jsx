import React from "react";
import RouteIndexItem from "../map/route_index_item";
import Header from "../header/header_container";

class RouteIndex extends React.Component {
  componentDidMount(){
    this.props.fetchRoutes();
  }

  render(){
    // debugger
    const routes = this.props.routes.reverse().map(route => {
      return (
        <RouteIndexItem
          key={route.id}
          route={route}
          refs={this.refs.map}/>
      );
    });

    return (
      <div>
        <Header />
        <div className="route-index">
          <div className="route-index-body">
            <div className="route-index-elements">
              <div className="my-routes-title">
                <div>My Routes</div>
                <a href="#/route/new">Create New Route</a>
              </div>
              <ul className="route-items">
                {routes}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RouteIndex;
