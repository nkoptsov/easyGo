import axios from 'axios';
import * as types from './constants';


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

export const fetchOneTripBegin = () => ({
  type: types.FETCH_ONE_TRIP_BEGIN,
});

export const fetchOneTripSuccess = trip => ({
  type: types.FETCH_ONE_TRIP_SUCCESS,
  payload: trip,
});

export const fetchOneTripError = error => ({
  type: types.FETCH_ONE_TRIP_FAILURE,
  payload: { error },
});

export function fetchSubscriptions() {
  return (dispatch) => {
    axios.get('/api/users/trips/subscribed')
      .then((res) => {
        const arr = [];
        res.data.forEach((element) => {
          arr.push(element.Trip);
        });
        dispatch(fetchSubscriptionsSuccess(arr));
      })
      .catch(error => dispatch(fetchSubscriptionsError(error)));
  };
}

export function fetchOneTrip(tripId) {
  return (dispatch) => {
    dispatch(fetchOneTripBegin());
    axios.get(`/api/trips/${tripId}`)
      .then((res) => {
        dispatch(fetchOneTripSuccess(res.data));
      })
      .catch(error => dispatch(fetchOneTripError(error)));
  };
}
