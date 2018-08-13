import { SHOW_TRIPS } from '../Actions/types';

const initialState = { trips: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TRIPS:
      // return [...state, action.trips];
      return Object.assign({}, state, { trips: action.trips });

    default:
      return state;
  }
};
