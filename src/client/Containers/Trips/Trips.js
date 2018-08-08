import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../Components/Header/Header';
import TripsView from '../../Components/Trips/TripsView';
import TripsSearchForm from '../../Components/TripsSearchForm/TripsSearchForm';
import { fetchAllTrips, searchTrips } from '../../Actions';

class Trips extends Component {
  componentDidMount() {
    this.props.fetchAllTrips();
  }

  handleSearchSubmit = (formData) => {
    this.props.handleSearchSubmit(formData);
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <TripsSearchForm handleSearchSubmit={this.handleSearchSubmit} />
          <TripsView trips={this.props.trips} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips.trips,
});

Trips.defaultProps = {
  trips: [],
};

Trips.propTypes = {
  trips: PropTypes.array,
  handleSearchSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchAllTrips: () => {
    dispatch(fetchAllTrips());
  },
  handleSearchSubmit: (formData) => {
    dispatch(searchTrips({ formData }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
