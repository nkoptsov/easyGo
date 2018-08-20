import * as types from '../Actions/constants';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const subscriptions = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUBSCRIPTIONS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCH_SUBSCRIPTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case types.FETCH_SUBSCRIPTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

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
        items: [action.payload],
      };

    case types.FETCH_ONE_TRIP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    default:
      return state;
  }
};

export default subscriptions;
