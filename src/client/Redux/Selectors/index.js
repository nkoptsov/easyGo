import { createSelector } from 'reselect';

const getOneSubscribedTrip = state => state.subscriptions.items;
const getOneTrip = state => state.trips.trips;
const getOneMyTrip = state => state.myTrips.trips;

const getTripId = (state, props) => {
  const { match } = props;
  return match.params.tripId;
};

const getLocation = (state) => {
  const { path } = state.path;
  return path;
};

export const oneSubcribedTripSelector = createSelector(
  [getOneSubscribedTrip, getTripId],
  (trips, tripId) => trips.find(elem => elem.id === parseInt(tripId, 10)),
);

export const oneTripSelector = createSelector(
  [getOneTrip, getTripId],
  (trips, tripId) => trips.find(elem => elem.id === parseInt(tripId, 10)),
);

export const oneMyTripSelector = createSelector(
  [getOneMyTrip, getTripId],
  (trips, tripId) => trips.find(elem => elem.id === parseInt(tripId, 10)),
);



// export default oneTripSelector;
