import { combineReducers } from 'redux';
import trips from './Trips';
import Profile from './profileReducer';


const rootReducer = combineReducers({
  trips,
  Profile,
});

export default rootReducer;
