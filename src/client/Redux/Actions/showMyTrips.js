import axios from 'axios';
import { SHOW_MY_TRIPS_SUCCESS, SHOW_MY_TRIPS_FAILED } from './constants';

export const myTripsSuccess = trips => ({
  type: SHOW_MY_TRIPS_SUCCESS,
  trips,
});

export const myTripsFailed = err => ({
  type: SHOW_MY_TRIPS_FAILED,
  err,
});

export const fetchMyTrips = () => dispatch => axios({
  method: 'get',
  url: '/api/users/trips/created',
  withCredentials: true,
  responseType: 'json',
})
  .then((trips) => {
    dispatch(myTripsSuccess(trips.data));
  })
  .catch((err) => {
    dispatch(myTripsFailed(err));
  });
