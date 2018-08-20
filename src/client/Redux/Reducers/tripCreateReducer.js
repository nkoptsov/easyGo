import {
  TRIP_CREATE_SUCCESS,
  TRIP_CREATE_FAILED,
} from '../Actions/constants';


const initialState = {
  trips: [{
    name: '',
    dateStart: '',
    dateEnd: '',
    locationStart: '',
    locationEnd: '',
    tripCost: '',
    description: '',
  }],
};
const trips = (state = initialState, action) => {
  switch (action.type) {
    case TRIP_CREATE_SUCCESS:
      return Object.assign({}, state, { trips: action.trips });
    case TRIP_CREATE_FAILED:
      return Object.assign({}, state, { trips: action.trips });
    default:

      return state;
  }
};

export default trips;
