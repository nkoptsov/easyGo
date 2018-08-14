import { createSelector } from 'reselect';

const getOneSubscribedTrip = state => state.subscriptions.items;

const rout = (state, props) => {
  const { match } = props;
  return match.params.tripId;
};


const oneSubscribedTripSelector = createSelector(
  [getOneSubscribedTrip, rout],
  (trips, id) => trips.find(elem => elem.id === parseInt(id, 10)),
);

export default oneSubscribedTripSelector;
