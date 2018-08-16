import { combineReducers } from 'redux';
import trips from './Trips';
import errors from './Errors';

const rootReducer = combineReducers({
  trips,
  errors,
});

export default rootReducer;
