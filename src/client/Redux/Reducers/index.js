import { combineReducers } from 'redux';
import trips from './Trips';
import myTrips from './myTrips';
import errors from './Errors';
import subscriptions from './SubscriptionsReduser';
import trip from './TripReduser';

const rootReducer = combineReducers({
  trips,
  myTrips,
  subscriptions,
  trip,
  errors,
});

export default rootReducer;
