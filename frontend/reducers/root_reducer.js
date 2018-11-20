import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./session_errors_reducer";
import ui from './ui_reducers';
import routesReducer from "./routes_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  routes: routesReducer,
  ui
});

export default rootReducer;
