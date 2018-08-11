import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../Components/Header/Header';
import TripView from '../../Components/Trips/TripView';
import NotFound from '../NotFound/NotFound';

class Trip extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <TripView trip={this.props.trip} />
        </main>
      </div>
    );
  }
  
}

const mapStateToProps = (state, ownProps) => ({
  trip: state.subscriptions.items.find(elem => elem.id === parseInt(ownProps.match.params.tripId, 10)),

});

export default connect(mapStateToProps)(Trip);
