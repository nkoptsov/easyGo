import axios from 'axios';
import * as types from './constants';

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
