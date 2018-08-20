import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../../Components/Header/Header';
import TripCreateForm from '../../Components/TripCreateForm/TripCreateForm';
import { fetchTripCreate } from '../../Redux/Actions/tripCreateAction';

class TripCreate extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTripCreate();
  }

  render() {
    const { trips } = this.props;
    return (
      <div>
        <Header />
        <TripCreateForm />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  trips: state.trips.trips,
});

const mapDispatchToProps = {
  fetchTripCreate,
};

TripCreate.propTypes = {
  trips: PropTypes.shape({
    name: PropTypes.string,
    dateStart: PropTypes.string,
    dateEnd: PropTypes.string,
    locationStart: PropTypes.string,
    locationEnd: PropTypes.string,
    tripCost: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(TripCreate);
