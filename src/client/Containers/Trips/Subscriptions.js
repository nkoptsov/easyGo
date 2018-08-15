import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchSubscriptions, fetchSubscriptionsSuccess, fetchSubscriptionsError } from '../../actions/index';
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
    this.props.dispatch(fetchSubscriptions());
    // this.props.getSubscriptions();
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

// const mapDispatchToProps = dispatch => ({

//   getSubscriptions: () => {
//     axios.get('/api/users/trips/subscribed')
//       .then((res) => {
//         const arr = [];
//         res.data.forEach((element) => {
//           arr.push(element['Trip']);
//         });
//         dispatch(fetchSubscriptionsSuccess(arr));
//       })
//       .catch(error => dispatch(fetchSubscriptionsError(error)));
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);

export default connect(mapStateToProps)(Subscriptions);

