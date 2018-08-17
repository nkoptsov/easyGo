import { combineReducers } from 'redux';
import trips from './Trips';
import myTrips from './myTrips';

const rootReducer = combineReducers({
  trips,
  myTrips,
});

export default rootReducer;
