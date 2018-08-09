export default (state = [], action) => {
  switch (action.type) {
      case 'showTrips':
    return [...state, action.trips]

    default:
      return state;
  }
};
