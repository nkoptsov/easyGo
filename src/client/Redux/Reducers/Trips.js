import { FETCH_SEARCH_TRIPS } from '../Actions/constants';

const initialState = { trips: [] };

function TripsSearch(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH_TRIPS:
      return Object.assign({}, state, { trips: action.trips });
    default:
      return state;
  }
}

export default TripsSearch;
