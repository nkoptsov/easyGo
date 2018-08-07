import axios from 'axios';
import { FETCH_SEARCH_TRIPS } from './types';

const apiUrl = '/api/trips/';

export const SearchTripsSuccess = trips => ({
  type: FETCH_SEARCH_TRIPS,
  trips,
});

export const searchTrips = ({ formData }) => dispatch => axios.get(`${apiUrl}?${formData}`)
  .then((trips) => {
    dispatch(SearchTripsSuccess(trips));
  })
  .catch((error) => {
    throw (error);
  });


export const fetchAllTrips = () => dispatch => axios.get(apiUrl)
  .then((trips) => {
    dispatch(SearchTripsSuccess(trips));
  })
  .catch((error) => {
    throw (error);
  });
