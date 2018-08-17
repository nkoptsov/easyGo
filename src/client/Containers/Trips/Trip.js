import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import TripView from '../../Components/Trips/TripView';

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.match.url,
      trip: {},
    };
  }

  componentDidMount() {
    fetch(`/api/${this.state.url}`)
      .then(res => res.json())
      .then((res) => {
        this.setState({ trip: res });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <TripView trip={this.state.trip} />
        </main>
      </div>
    );
  }
}

export default Trip;
