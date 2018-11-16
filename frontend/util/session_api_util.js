export const signup = (athlete) => {
  return $.ajax({
    method: "POST",
    url: `/api/athletes`,
    data: {athlete: {username: athlete.username, password: athlete.password }}
  })
}

export const login = (athlete) => {
  // debugger
  return $.ajax({
    method: "POST",
    url: `/api/session`,
    data: {athlete: {username: athlete.username, password: athlete.password }}
  })
}

export const logout = () => {
  // debugger
  return $.ajax({
    method: "DELETE",
    url: `/api/session`
  })
}
