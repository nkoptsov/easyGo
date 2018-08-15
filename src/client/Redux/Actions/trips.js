import axios from 'axios';
import { FETCH_SEARCH_TRIPS } from './constants';

const apiUrl = '/api/trips/';

export const SearchTripsSuccess = trips => ({
  type: FETCH_SEARCH_TRIPS,
  trips,
});

export const searchTrips = ({ formData }) => dispatch => axios({
  method: 'get',
  url: `${apiUrl}?${formData}`,
  withCredentials: true,
  responseType: 'json',
})
  .then((trips) => {
    dispatch(SearchTripsSuccess(trips.data));
  })
  .catch((error) => {
    throw (error);
  });


export const fetchAllTrips = () => dispatch => axios({
  method: 'get',
  url: apiUrl,
  withCredentials: true,
  responseType: 'json',
})
  .then((trips) => {
    dispatch(SearchTripsSuccess(trips.data));
  })
  .catch((error) => {
    throw (error);
  });
