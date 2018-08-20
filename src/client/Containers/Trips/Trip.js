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
import { fetchOneTrip } from '../../Redux/Actions/tripActions';

class Trip extends Component {
  componentDidMount() {
    const { trip, match, dispatch } = this.props;
    const { tripId } = match.params;
    if (!trip) {
      dispatch(fetchOneTrip(tripId));
    }
  }

  render() {
    const { trip } = this.props;

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
    return {};
  })(),
});

export default connect(mapStateToProps)(Trip);
