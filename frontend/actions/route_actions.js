import * as APIUtil from "../util/route_api_util";

export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";

export const createRoute = route => dispatch => {
  // debugger
  return APIUtil.createRoute(route).then(route => {
    // debugger
    return dispatch(receiveRoute(route))
  }, err => {
    return dispatch(receiveRouteErrors(err.responseJSON))
  });
};

export const fetchRoute = route => dispatch => {
  return APIUtil.fetchRoute(route).then(route => {
    return dispatch(receiveRoute(route))
  })
};

export const fetchRoutes = () => dispatch => {
  return APIUtil.fetchRoutes().then(routes => dispatch(receiveRoutes(routes)))
};

export const receiveRoute = route => {
  // debugger
  return {
    type: RECEIVE_ROUTE,
    route
  }
}

export const receiveRoutes = routes => {
  return {
    type: RECEIVE_ROUTES,
    routes
  }
}

export const receiveRouteErrors = errors => {
  return {
    type: RECEIVE_ROUTE_ERRORS,
    errors,
  }
}




// export const createRoute = route => dispatch => {
//   return APIUtil.createRoute(route).then(route => {
//     dispatch({
//       type: RECEIVE_ROUTE,
//       route
//     })
//   })
// }
//
// export const fetchRoute = route => dispatch => {
//   return APIUTil.fetchRoute(route).then(route => {
//     dispatch({
//       type: RECEIVE_ROUTE,
//       route
//     })
//   })
// }
//
// export const fetchRoutes = () => dispatch => {
//   return APIUtil.fetchRoutes().then(routes => {
//     dispatch ({
//       type: RECEIVE_ROUTES,
//       routes
//     })
//   })
// }
