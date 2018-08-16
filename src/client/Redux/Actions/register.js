import axios from 'axios';
import { GET_ERRORS } from './constants';

const register = (userData, history) => (dispatch) => {
  axios.post('/api/users/register', userData, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => history.push('/login'))
    .catch(error => dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    }));
};

export default register;
