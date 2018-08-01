import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import LoginForm from '../../Components/LoginForm/LoginForm';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
  }


  submit = (data) => {
    fetch('/api/users/login', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        sessionStorage.setItem('user-login', JSON.stringify(data.login));
        this.setState({ shouldRedirect: true });
      }
    });
  };

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Header />
        <main>
          <LoginForm submit={this.submit} />
        </main>
      </div>
    );
  }
}

export default Login;
