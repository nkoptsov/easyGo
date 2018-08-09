import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../Components/Header/Header';
import TripsView from '../../Components/Trips/TripsView';
import { showTrips } from '../../actions/showTrips';

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
        if (res.status === 200) {
          this.setState({ errorFlag: true });
          return res.json();
        }
      })
      .then((res) => {
        this.props.showTrips(res);
      })
      .catch(err => console.log(`request failed ${err.message}`));
  }

  render() {
    if (this.state.errorFlag) {
      return (
        <div>
          <Header />
          <main>
            <TripsView data={this.props.myTrips} />
          </main>
        </div>
      );
    }
    return (
      <div>
        <Header />
        <main>
          <h1>
            {' '}
Trips not found
          </h1>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myTrips: state.myTrips,
});

const mapDispatchToProps = dispatch => ({
  showTrips(trips) {
    dispatch(showTrips(trips));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MyTrips);
