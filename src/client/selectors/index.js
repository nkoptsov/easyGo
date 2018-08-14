import { createSelector } from 'reselect';

const getOneSubscribedTrip = (state, props) => {
  const { match } = props;
  return state.subscriptions.items.find(elem => elem.id === parseInt(match.params.tripId, 10));
};

const oneSubscribedTripSelector = createSelector(
  getOneSubscribedTrip,
  trip => trip,
);

export default oneSubscribedTripSelector;
