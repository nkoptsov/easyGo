import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../Components/Header/Header';
import TripsView from '../../Components/Trips/TripsView';
import { fetchMyTrips } from '../../Redux/Actions/showMyTrips';

class MyTrips extends Component {
  componentDidMount() {
    this.props.fetchMyTrips();
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <TripsView trips={this.props.myTrips} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myTrips: state.myTrips.trips,
});

MyTrips.defaultProps = {
  myTrips: [],
};

MyTrips.propTypes = {
  myTrips: PropTypes.instanceOf(Array),
  fetchMyTrips: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchMyTrips() {
    dispatch(fetchMyTrips());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(MyTrips);
