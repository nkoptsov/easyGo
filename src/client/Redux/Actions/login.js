import axios from 'axios';
import { GET_ERRORS } from './types';

const login = (userData, history) => (dispatch) => {
  axios.post('/api/users/login', userData, {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  })
    .then(() => {
      sessionStorage.setItem('user-login', JSON.stringify(userData.login));
      history.push('/');
    })
    .catch(error => dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    }));
};

export default login;
