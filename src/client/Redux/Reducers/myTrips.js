import { SHOW_TRIPS } from '../Actions/types';

const initialState = { trips: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TRIPS:
      return Object.assign({}, state, { trips: action.trips });

    default:
      return state;
  }
};
