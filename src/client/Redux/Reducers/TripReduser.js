import * as types from '../Actions/constants';

const initialState = {
  trip: {},
  loading: false,
  error: null,
};

const trip = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ONE_TRIP_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case types.FETCH_ONE_TRIP_SUCCESS:
      return {
        ...state,
        loading: false,
        trip: action.payload,
      };

    case types.FETCH_ONE_TRIP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        trip: {},
      };

    default:
      return state;
  }
};

export default trip;
