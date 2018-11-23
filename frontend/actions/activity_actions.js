import * as ActivityApiUtil from "../util/activity_api_util";

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const RECEIVE_ACTIVITY = "RECEIVE_ACTIVITY";
export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY";
export const RECEIVE_ACTIVITY_ERRORS = "RECEIVE_ACTIVITY_ERRORS";

export const fetchActivities = () => dispatch => {
  return ActivityApiUtil.fetchActivities().then(
    activities => dispatch(receiveActivities(activities)))
};

export const fetchActivity = id => dispatch => {
  return ActivityApiUtil.fetchActivity(id).then(
    activity => dispatch(receiveActivity(activity)))
};

export const createActivity = activity => dispatch => {
  return ActivityApiUtil.createActivity(activity).then(activity => {
    return dispatch(receiveActivity(activity))
  }, err => {
    return dispatch(receiveErrors(err.responseJSON))
  });
};

export const updateActivity = activity => dispatch => {
  return ActivityApiUtil.updateActivity(activity).then(
    activity => dispatch(receiveActivity(activity)))
};

export const deleteActivity = activityId => dispatch => {
  return ActivityApiUtil.deleteActivity(activityId).then(
    activity => dispatch(removeActivity(activity)))
};

const receiveActivities = activities => {
  return ({
    type: RECEIVE_ACTIVITIES,
    activities
  })
}

const receiveActivity = activity => {
  return ({
    type: RECEIVE_ACTIVITY,
    activity
  })
}

const removeActivity = activityId => {
  return ({
    type: REMOVE_ACTIVITY,
    activityId
  })
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_ACTIVITY_ERRORS,
    errors,
  }
}
