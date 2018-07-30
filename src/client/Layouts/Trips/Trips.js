import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import TripsView from '../../Components/Trips/TripsView';

class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('/api/trips')
      .then(res => res.json())
      .then((res) => {
        this.setState({ data: res });
      });
  }

  render() {
      return (
            <div>
                <Header />
                <main>
                    <TripsView data={this.state.data} />
                </main>
            </div>
      );
    }
}

export default Trips;
