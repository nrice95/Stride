export const fetchActivities = data => {
  return $.ajax({
    method: "GET",
    url: "api/activities",
    data
  })
}

export const fetchActivity = id => {
  return $.ajax({
    method: "GET",
    url: `api/activities/${id}`
  })
}

export const createActivity = data => {
  return $.ajax({
    method: "POST",
    url: "api/activities",
    data
  })
}

export const updateActivity = payload => {
  // debugger
  return $.ajax({
    method: "PATCH",
    url: `api/activities/${payload.activity.id}`,
    data: payload
  })
}

export const deleteActivity = id => {
  return $.ajax({
    url: `api/activities/${id}`,
    method: "DELETE"
  })
}
