import { combineReducers } from 'redux';
import trips from './Trips';
import errors from './Errors';
import subscriptions from './SubscriptionsReduser';

const rootReducer = combineReducers({
  trips,
  subscriptions,
  errors,
});

export default rootReducer;
