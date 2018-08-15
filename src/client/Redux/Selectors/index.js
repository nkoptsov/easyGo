import { createSelector } from 'reselect';

const getOneSubscribedTrip = state => state.subscriptions.items;

const getTripId = (state, props) => {
  const { match } = props;
  return match.params.tripId;
};


const oneSubscribedTripSelector = createSelector(
  [getOneSubscribedTrip, getTripId],
  (trips, tripId) => trips.find(elem => elem.id === parseInt(tripId, 10)),
);

export default oneSubscribedTripSelector;
