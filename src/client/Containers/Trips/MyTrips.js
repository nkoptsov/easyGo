import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import TripsView from '../../Components/Trips/TripsView';

class MyTrips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch('/api/users/trips/created',
      { credentials: 'include' })
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res });
      })
      .catch(err => console.log(`request failed ${err.message}`));
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <TripsView data={this.state.data} />
        </main>
      </div>
    )
  }
}

export default MyTrips;