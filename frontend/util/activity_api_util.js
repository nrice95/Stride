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

export const updateActivity = activity => {
  return $.ajax({
    method: "PATCH",
    url: `api/activities/${activity.id}/edit`,
    data: { activity }
  })
}

export const deleteActivity = id => {
  return $.ajax({
    url: `api/activities/${id}`,
    method: "DELETE"
  })
}
