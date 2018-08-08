import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import TripsView from '../../Components/Trips/TripsView';
import TripsSearch from './TripsSearch';


class Trips extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <TripsSearch />
          <TripsView />
        </main>
      </div>
    );
  }
}

export default Trips;
