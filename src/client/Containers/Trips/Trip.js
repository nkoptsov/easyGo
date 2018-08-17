import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../Components/Header/Header';
import TripView from '../../Components/Trips/TripView';
import NotFound from '../NotFound/NotFound';
import oneSubscribedTripSelector from '../../Redux/Selectors/index';
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
            <h1>LOADING</h1>
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
  trip: oneSubscribedTripSelector(state, ownProps),
  loading: state.subscriptions.loading,
  error: state.subscriptions.error,
});

export default connect(mapStateToProps)(Trip);
