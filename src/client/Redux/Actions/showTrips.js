import axios from 'axios';
import { SHOW_TRIPS, SHOW_TRIPS_FAILED } from './constants';

export const showCreatedTrips = trips => ({
  type: SHOW_TRIPS,
  trips,
});

export const showCreatedTripsFailed = err => ({
  type: SHOW_TRIPS_FAILED,
  err,
});

export const FetchMyTrips = () => dispatch => axios({
  method: 'get',
  url: '/api/users/trips/created',
  withCredentials: true,
  responseType: 'json',
})
  .then((trips) => {
    dispatch(showCreatedTrips(trips.data));
  })
  .catch((err) => {
    dispatch(showCreatedTripsFailed(err));
  });
