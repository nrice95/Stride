import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import sessionErrorsReducer from "./session_errors_reducer";
import signupErrorsReducer from "./signup_errors_reducer";
import ui from './ui_reducers';
import routesReducer from "./routes_reducer";
import activitiesReducer from "./activities_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  sessionErrors: sessionErrorsReducer,
  routes: routesReducer,
  activities: activitiesReducer,
  signupErrors: signupErrorsReducer,
  ui
});

export default rootReducer;
