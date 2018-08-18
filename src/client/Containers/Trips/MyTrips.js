import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../Components/Header/Header';
import TripsView from '../../Components/Trips/TripsView';
import { FetchMyTrips } from '../../Redux/Actions/showMyTrips';

class MyTrips extends Component {
  componentDidMount() {
    this.props.FetchMyTrips();
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
  FetchMyTrips: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  FetchMyTrips() {
    dispatch(FetchMyTrips());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(MyTrips);
