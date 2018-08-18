import { SHOW_TRIPS, SHOW_TRIPS_FAILED } from '../Actions/constants';

const initialState = { trips: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TRIPS:
      return Object.assign({}, state, { trips: action.trips });

    case SHOW_TRIPS_FAILED:
      return initialState;

    default:
      return state;
  }
};
