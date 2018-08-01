import React from 'react';
import { Redirect } from 'react-router-dom';

class LogOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
  }

  handleSearchSubmit = () => {
    fetch('/api/users/logout', {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      method: 'GET',

    }).then(() => {
      sessionStorage.clear();
      this.setState({ shouldRedirect: true });
    });
  };

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <button className="nav-item" onClick={this.handleSearchSubmit}>
          LogOut
        </button>
      </div>
    );
  }
}

export default LogOut;
