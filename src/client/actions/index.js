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

// Handle HTTP errors since fetch won't.
// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

export function fetchSubscriptions() {
  return (dispatch) => {
    dispatch(fetchSubscriptionsBegin());
    return fetch('/api/trips',
      { credentials: 'include' })
      .then(handleErrors)
      .then(res => res.json())
      .then((res) => {
        dispatch(fetchSubscriptionsSuccess(res));
        return res;
      })
      .catch(error => dispatch(fetchSubscriptionsError(error)));
  };
}
