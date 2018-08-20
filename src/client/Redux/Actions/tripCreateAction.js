import axios from 'axios';
import { TRIP_CREATE_SUCCESS, TRIP_CREATE_FAILED } from './constants';

export const tripCreateSuccess = trips => ({
  type: TRIP_CREATE_SUCCESS,
  trips,
});

export const tripCreateFailed = err => ({
  type: TRIP_CREATE_FAILED,
  err,
});

export const fetchTripCreate = () => dispatch => axios({
  method: 'POST',
  url: 'api/users/trips/created',
  withCredentials: true,
  responseType: 'json',
})
  .then((res) => {
    dispatch(tripCreateSuccess(res.data));
  })
  .catch((err) => {
    dispatch(tripCreateFailed(err));
  });
