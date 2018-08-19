import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../Components/Header/Header';
import TripView from '../../Components/Trips/TripView';
import NotFound from '../NotFound/NotFound';
import {
  oneSubcribedTripSelector,
  oneTripSelector,
  oneMyTripSelector,
}
  from '../../Redux/Selectors/index';
import { fetchOneTrip } from '../../Redux/Actions/subscriptionsActions';

class Trip extends Component {
  componentDidMount() {
    const { trip, match, dispatch } = this.props;
    const { tripId } = match.params;
    if (!trip) {
      dispatch(fetchOneTrip(tripId));
    }
  }

  render() {
    const { trip, loading, error } = this.props;

    if (loading) {
      return (
        <div>
          <Header />
          <main>
            <h1>
              LOADING
            </h1>
          </main>
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <NotFound />
        </div>
      );
    }

    return (
      <div>
        <Header />
        <main>
          <TripView trip={trip} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  trip: (() => {
    if (ownProps.match.path === '/subscriptions/:tripId') {
      return oneSubcribedTripSelector(state, ownProps);
    } if (ownProps.match.path === '/trips/:tripId') {
      return oneTripSelector(state, ownProps);
    } if (ownProps.match.path === '/mytrips/:tripId') {
      return oneMyTripSelector(state, ownProps);
    }
    return undefined;
  })(),
  loading: (() => {
    let load = false;
    if (ownProps.match.path === '/subscriptions/:tripId') {
      load = state.subscriptions.loading;
    }
    return load;
  })(),
  error: (() => {
    let err;
    if (ownProps.match.path === '/subscriptions/:tripId') {
      err = state.subscriptions.error;
    }
    return err;
  })(),
});

export default connect(mapStateToProps)(Trip);
