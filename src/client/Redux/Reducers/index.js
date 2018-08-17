import { combineReducers } from 'redux';
import trips from './Trips';
import myTrips from './myTrips';
import errors from './Errors';
import subscriptions from './SubscriptionsReduser';

const rootReducer = combineReducers({
  trips,
  myTrips,
  subscriptions,
  errors,
});

export default rootReducer;
