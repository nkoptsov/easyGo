import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../Components/Header/Header';
import TripView from '../../Components/Trips/TripView';
import NotFound from '../NotFound/NotFound';
import oneSubscribedTripSelector from '../../selectors/index';
import { fetchOneTrip } from '../../actions/index';


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
  trip: oneSubscribedTripSelector(state, ownProps),
  loading: state.subscriptions.loading,
});

export default connect(mapStateToProps)(Trip);
