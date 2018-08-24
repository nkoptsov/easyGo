import { combineReducers } from 'redux';
import trips from './Trips';
import profile from './profileReducer';
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
  profile,
});

export default rootReducer;
