import { SUCCESS_RESPONSE_TO_PROFILE } from '../actions';

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
};
const proffff = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_RESPONSE_TO_PROFILE:
      return Object.assign({}, state, { profile: action.profile });
    default:
      return state;
  }
};

export default proffff;
