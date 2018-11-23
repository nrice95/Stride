export const fetchRoutes = data => {
  debugger
  return $.ajax({
    method: "GET",
    url: "api/routes",
    data
  })
}

export const fetchRoute = id => {
  return $.ajax({
    method: "GET",
    url: `api/routes/${id}`
  })
}

export const createRoute = data => {
  debugger
  return $.ajax({
    method: "POST",
    url: "api/routes",
    data: {route: {polyline: data.polyline, center_lat: data.centerLat, center_lng: data.centerLng, distance: data.distance, athlete_id: data.athlete_id, activity_type: data.activity_type, title: data.title}}
  })
}
