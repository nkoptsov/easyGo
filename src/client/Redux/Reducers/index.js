import { combineReducers } from 'redux';
import trips from './Trips';


const rootReducer = combineReducers({
  trips,
});

export default rootReducer;
