import { SHOW_TRIPS } from './constants';

const showCreatedTrips = trips => ({
  type: SHOW_TRIPS,
  trips,
});

export default showCreatedTrips;
