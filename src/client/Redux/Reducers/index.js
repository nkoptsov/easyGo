import { combineReducers } from 'redux';
import trips from './Trips';
import subscriptions from './SubscriptionsReduser';

const rootReducer = combineReducers({
  trips,
  subscriptions,
});

export default rootReducer;
