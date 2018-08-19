import { SHOW_MY_TRIPS_SUCCESS, SHOW_MY_TRIPS_FAILED } from '../Actions/constants';

const initialState = { trips: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MY_TRIPS_SUCCESS:
      return Object.assign({}, state, { trips: action.trips });

    case SHOW_MY_TRIPS_FAILED:
      return initialState;

    default:
      return state;
  }
};
