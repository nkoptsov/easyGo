import { FETCH_SEARCH_TRIPS, FETCH_SEARCH_FAILED } from '../Actions/constants';

const initialState = { trips: [] };

function TripsSearch(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH_TRIPS:
      return Object.assign({}, state, { trips: action.trips });
    case FETCH_SEARCH_FAILED:
      console.log(`Error = ${action.error}`);
      return initialState;
    default:
      return state;
  }
}

export default TripsSearch;
