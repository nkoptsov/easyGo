import { SHOW_TRIPS } from './types';

const showCreatedTrips = trips => ({
  type: SHOW_TRIPS,
  trips,
});

export default showCreatedTrips;
