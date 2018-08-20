import React from 'react';
import { Button } from 'react-bootstrap';

class SubControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSubscribed: this.props.isSubscribed };
  }

    handleSubscribeClick = () => {
      fetch('/api/users/trips/subscribed', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ tripId: this.props.tripId }),
      }).then((res) => {
        if (res.status == 201) {
          this.setState({ isSubscribed: 'true' });
        }
      });
    };

    handleUnsubscribeClick = () => {
      fetch('/api/users/trips/subscribed/:tripId', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'DELETE',
        credentials: 'include',
        body: JSON.stringify({ tripId: this.props.tripId }),
      }).then((res) => {
        if (res.status == 200) {
          this.setState({ isSubscribed: 'false' });
        }
      });
    };

    render() {
      let button = null;
      if (this.state.isSubscribed == 'true') {
        button = (
          <Button bsStyle="primary" onClick={this.handleUnsubscribeClick}>
             Unsubscribe
          </Button>);
      } else {
        button = (
          <Button bsStyle="primary" onClick={this.handleSubscribeClick}>
             Subscribe
          </Button>);
      }

      return (
        <span>
          {button}
        </span>
      );
    }
}
export default SubControl;
