import {
  FETCH_PROFILE_SUCCESS,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILURE,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
} from '../Actions/constants';


const initialState = {
  profile: {
    login: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    birthday: '',
    city: '',
    country: '',
    gender: '',
    about: '',
  },
  error: {},

};
const profile = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_SUCCESS:
      return Object.assign({}, state, { profile: action.profile });
    case PROFILE_UPDATE_SUCCESS:
      return Object.assign({}, state, { profile: action.profile });
    default:

      return state;
  }
};

export default profile;
