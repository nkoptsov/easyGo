import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import TripView from '../../Components/Trips/TripView';
import NotFound from '../NotFound/NotFound';

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.match.url,
      trip: {},
      isNotFound: true,
    };
  }

  componentWillMount() {
    const { url } = this.state;
    fetch(`/api/${url}`)
      .then((res) => {
        if (res.status < 400) {
          this.setState({ isNotFound: false });
          return res.json();
        }
      })
      .then((res) => {
        if (!res.message) {
          this.setState({ trip: res });
        }
      });
  }

  render() {
    const { trip, isNotFound } = this.state;
    if (!isNotFound) {
      return (
        <div>
          <Header />
          <main>
            <TripView trip={trip} />
          </main>
        </div>
      );
    }
    return (
      <div>
        <main>
          <NotFound />
        </main>
      </div>
    );

  }
}

export default Trip;
