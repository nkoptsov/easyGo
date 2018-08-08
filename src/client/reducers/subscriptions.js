import * as types from '../actions/ActionsTypes';

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
        items: action.payload.subscriptions,
      };
    case types.FETCH_SUBSCRIPTIONS_FAILURE:
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
