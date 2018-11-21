import { combineReducers } from 'redux';
import athletesReducer from './athletes_reducer';
import routesReducer from "./routes_reducer";
import activitiesReducer from "./activities_reducer";

const entitiesReducer = combineReducers({
  athletes: athletesReducer,
  routes: routesReducer,
  activities: activitiesReducer
});

export default entitiesReducer;
