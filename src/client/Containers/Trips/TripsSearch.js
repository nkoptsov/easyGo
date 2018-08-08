import React, { Component } from 'react';
import { connect } from 'react-redux';
import TripsSearchForm from '../../Components/TripsSearchForm/TripsSearchForm';
import { searchTrips } from '../../Actions';

class TripsSearch extends Component {
  ttt = (data) => {
    this.props.handleSearchSubmit(data);
  }

  render() {
    return (
      <div>
        <TripsSearchForm handleSearchSubmit={this.ttt} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSearchSubmit: (formData) => {
    dispatch(searchTrips({ formData }));
  },
});

export default connect(null, mapDispatchToProps)(TripsSearch);
