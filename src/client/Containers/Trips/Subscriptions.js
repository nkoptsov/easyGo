import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import TripsView from '../../Components/Trips/TripsView';

class Subscriptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorFlag: false,
      data: [],
    };
  }

  componentDidMount() {
    fetch('/api/users/trips/subscribed',
      { credentials: 'include' })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ errorFlag: true });
          return res.json();
        }
      })
      .then((res) => {
        const arr = [];
        res.forEach((element) => {
          arr.push(element.Trip);
        });
        this.setState({ data: arr });
      })
      .catch(err => console.log(`request failed ${err.message}`));
  }

  render() {
    const { errorFlag, data } = this.state;

    if (errorFlag) {
      return (
        <div>
          <Header />
          <main>
            <TripsView data={data} />
          </main>
        </div>
      );
    }
    return (
      <div>
        <Header />
        <main>
          <h1>
            Trips not found
          </h1>
        </main>
      </div>
    );
  }
}

export default Subscriptions;
