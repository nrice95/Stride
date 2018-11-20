import { combineReducers } from 'redux';
import athletesReducer from './athletes_reducer';
import routesReducer from "./routes_reducer";

const entitiesReducer = combineReducers({
  athletes: athletesReducer,
  routes: routesReducer
});

export default entitiesReducer;
