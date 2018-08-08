import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchSubscriptions, fetchSubscriptionsSuccess, fetchSubscriptionsError
} from '../../actions/index';
import Header from '../../Components/Header/Header';
import TripsView from '../../Components/Trips/TripsView';


class Subscriptions extends Component {
  // constructor(props) {
  // super(props);
  // this.state = {
  //   errorFlag: false,
  //   data: [],
  // };


  componentDidMount() {
    this.props.getSubscriptions();
  }

  render() {
    const { subscriptions } = this.props;
    return (
      <div>
        <Header />
        <main>
          <TripsView data={subscriptions} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subscriptions: state.subscriptions.items,
  loading: state.subscriptions.loading,
  error: state.subscriptions.error,
});

const mapDispatchToProps = dispatch => ({

  getSubscriptions: (dispatch) => {
    fetch('/api/trips',
      { credentials: 'include' })
      .then(res => res.json())
      .then((res) => {
        dispatch(fetchSubscriptionsSuccess(res));
      })
      .catch(error => dispatch(fetchSubscriptionsError(error)));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
