import { combineReducers } from 'redux';
import trips from './Trips';
import profile from './profileReducer';
import myTrips from './myTrips';
import errors from './Errors';
import subscriptions from './SubscriptionsReduser';

const rootReducer = combineReducers({
  trips,
  myTrips,
  subscriptions,
  errors,
  profile,
});

export default rootReducer;
