import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../Components/Header/Header';
import TripsView from '../../Components/Trips/TripsView';
import TripsSearchForm from '../../Components/TripsSearchForm/TripsSearchForm';
import { fetchAllTrips, searchTrips } from '../../Redux/Actions/trips';

class Trips extends Component {
  { fetchAllTrips, handleSearchSubmit, trips } = this.props;

  componentDidMount() {
    fetchAllTrips();
  }

  handleSearchSubmit = (formData) => {
    handleSearchSubmit(formData);
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <TripsSearchForm handleSearchSubmit={this.handleSearchSubmit} />
          <TripsView trips={trips} />
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
  fetchAllTrips: PropTypes.func.isRequired,
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
