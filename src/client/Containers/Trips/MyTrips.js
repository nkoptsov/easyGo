import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../Components/Header/Header';
import TripsView from '../../Components/Trips/TripsView';
import showCreatedTrips from '../../Redux/Actions/showTrips';

class MyTrips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorFlag: false,
      data: [],
    };
  }

  componentDidMount() {
    fetch('/api/users/trips/created',
      { credentials: 'include' })
      .then((res) => {
        if (res.status < 400) {
          return res.json();
        }
      })
      .then((res) => {
        console.log(this.props);

        this.props.showTrips(res);
        this.setState({ errorFlag: true });
      })
      .catch(err => console.log(`request failed ${err.message}`));
  }

  render() {
    if (this.state.errorFlag) {
      return (
        <div>
          <Header />
          <main>
            <TripsView trips={this.props.myTrips} />
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

const mapStateToProps = state => ({
  myTrips: state.myTrips.trips,
});

const mapDispatchToProps = dispatch => ({
  showTrips(trips) {
    dispatch(showCreatedTrips(trips));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MyTrips);
