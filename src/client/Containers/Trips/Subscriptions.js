import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSubscriptions } from '../../Redux/Actions/subscriptionsActions';
import Header from '../../Components/Header/Header';
import TripsView from '../../Components/Trips/TripsView';
import NotFound from '../NotFound/NotFound';


class Subscriptions extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSubscriptions());
    // this.props.getSubscriptions();
  }

  render() {
    const { subscriptions, loading, error, path } = this.props;
    if (loading) {
      return (
        <div>
          <Header />
          <main>
            <h1>
              LOADING
            </h1>
          </main>
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <NotFound />
        </div>
      );
    }
    return (
      <div>
        <Header />
        <main>
          <TripsView trips={subscriptions} path={path} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subscriptions: state.subscriptions.items,
  loading: state.subscriptions.loading,
  error: state.subscriptions.error,
  path: state.router.location.pathname,
});

export default connect(mapStateToProps)(Subscriptions);
