import axios from 'axios';
import * as types from './ActionsTypes';


export const fetchSubscriptionsBegin = () => ({
  type: types.FETCH_SUBSCRIPTIONS_BEGIN,
});

export const fetchSubscriptionsSuccess = subscriptions => ({
  type: types.FETCH_SUBSCRIPTIONS_SUCCESS,
  payload: subscriptions,
});

export const fetchSubscriptionsError = error => ({
  type: types.FETCH_SUBSCRIPTIONS_FAILURE,
  payload: { error },
});

export function fetchSubscriptions() {
  return (dispatch) => {
    axios.get('/api/users/trips/subscribed')
      .then((res) => {
        const arr = [];
        res.data.forEach((element) => {
          arr.push(element['Trip']);
        });
        dispatch(fetchSubscriptionsSuccess(arr));
      })
      .catch(error => dispatch(fetchSubscriptionsError(error)));
  }

};
