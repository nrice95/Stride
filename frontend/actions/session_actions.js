import * as APIUtil from "../util/session_api_util";
export const RECEIVE_CURRENT_ATHLETE = "RECEIVE_CURRENT_ATHLETE";
export const LOGOUT_CURRENT_ATHLETE = "LOGOUT_CURRENT_ATHLETE";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentAthlete = (currentAthlete) => {
  // debugger
  return {
    type: RECEIVE_CURRENT_ATHLETE,
    athlete: currentAthlete
  };
};

export const logoutCurrentAthlete = () => ({
  type: LOGOUT_CURRENT_ATHLETE,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const login = (athlete) => dispatch => {
  // debugger
  return APIUtil.login(athlete).then(athlete => (
    // debugger
    dispatch(receiveCurrentAthlete(athlete))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(() => dispatch(logoutCurrentAthlete()));
};

export const signup = (athlete) => dispatch => {
  // debugger
  return APIUtil.signup(athlete).then(athlete => (
    // debugger
    dispatch(receiveCurrentAthlete(athlete))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

// export const login = athlete => dispatch => {
//   return APIUtil.login(athlete).then(athlete => {
//     type: RECEIVE_CURRENT_ATHLETE,
//     athlete
//   })
// }
//
// export const logout = () => dispatch => {
//   return APIUtil.logout().then(() => {
//     type: RECEIVE_CURRENT_ATHLETE
//   })
// }
//
// export const signup = athlete => dispatch => {
//   return APIUtil.signup(athlete).then(athlete => {
//     type: RECEIVE_CURRENT_ATHLETE,
//     athlete
//   })
// }
