import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import TripsView from '../../Components/Trips/TripsView';
import TripsSearch from './TripsSearch';


class Trips extends Component {
  /*  componentDidMount() {
    fetch('/api/trips')
      .then(res => res.json())
      .then((res) => {
        this.setState({ data: res });
      });
  } */

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
