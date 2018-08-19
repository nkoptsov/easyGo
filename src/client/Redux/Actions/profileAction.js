import axios from 'axios';
import {
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_SUCCESS,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILURE,
} from './constants';
import Api from '../../api/Api';

const PROFILE = '/api/users/profile';
const PASSWORD = '/api/users/profile/password';

export const fetchProfileSuccess = profile => ({
  type: FETCH_PROFILE_SUCCESS,
  profile,
});

export const fetchProfileFailure = error => ({
  type: FETCH_PROFILE_FAILURE,
  error,
});

export const fetchProfie = () => dispatch => axios({
  method: 'GET',
  url: PROFILE,
  withCredentials: true,
  responseType: 'json',
})
  .then((res) => {
    dispatch(fetchProfileSuccess(res.data));
  })
  .catch((err) => {
    dispatch(fetchProfileFailure(err));
  });


export const profileUpdate = profile => ({
  type: PROFILE_UPDATE_SUCCESS,
  profile,
});

export const profileUpdateFailure = error => ({
  type: PROFILE_UPDATE_FAILURE,
  error,
});

export const changeProfile = data => dispatch => axios({
  method: 'PUT',
  url: PROFILE,
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
  data: JSON.stringify(data),
})
  .then((res) => {
    if (res.status === 200) dispatch(profileUpdate(data));
  })
  .catch((err) => {
  });

export const changePassword = newPassword => dispatch => axios({
  method: 'POST',
  url: PASSWORD,
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
  data: JSON.stringify(newPassword),

})
  .then((res) => {
    if (res.status === 200) {
      console.log('good');
    }
    // dispatch(fetchProfileSuccess(res.data));
  })
  .catch((err) => {
    // dispatch(fetchProfileFailure(err));
  });