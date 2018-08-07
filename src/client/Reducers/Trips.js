import { FETCH_SEARCH_TRIPS } from '../Actions/types';

const initialState = { trips: [] };

function TripsSearch(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH_TRIPS:
      return action.data;
    default:
      return state;
  }
}

export default TripsSearch;
