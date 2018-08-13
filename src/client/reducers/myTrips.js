const initialState = { trips: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'showTrips':
      return Object.assign({}, state, { trips: action.trips });

    default:
      return state;
  }
};
