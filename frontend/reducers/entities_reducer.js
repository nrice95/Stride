import { combineReducers } from 'redux';
import athletesReducer from './athletes_reducer';

const entitiesReducer = combineReducers({
  athletes: athletesReducer
});

export default entitiesReducer;
