import { SEND_REQUEST_PROFILE, SUCCESS_RESPONSE_TO_PROFILE } from './actions';

export const successResponseProfile = profile => ({
  type: SUCCESS_RESPONSE_TO_PROFILE,
  profile,
});

export const setRequstProfile = index => ({
  type: SEND_REQUEST_PROFILE,
  index,
});


// export default successResponseProfile;
