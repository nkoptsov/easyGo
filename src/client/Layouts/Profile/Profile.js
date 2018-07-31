import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import ListForm from '../../Components/ListForm/ListForm';
import Password from '../../Components/Password/Password';
import Account from '../../Components/Account/Account';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        login: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        birthday: '',
        city: '',
        country: '',
        gender: '',
        about: '',
      },
      password: {
        lastPassword: '',
        newPassword: '',
        repeatPassword: '',
      },
    };
  }

  componentDidMount() {
    this.requestAccount();
  }

  requestAccount = () => {
    fetch('/api/users/profile', { credentials: 'include' })
      .then(value => value.json())
      .then((profile) => {
        this.setState({
          profile,
        });
      })
      .catch((err) => { console.log(err); });
  }

  accountChange = (name, value) => {
    const { profile } = this.state;
    this.setState({ profile: { ...profile, [name]: value } });
  }

  submitAccount = (body) => {
    fetch('/api/users/profile', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    }).then((value) => {
    });
  }

  submitPassword = (body) => {
    fetch('/api/users/profile/password', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    }).then((value) => {
      if (value.status === 200) {
        console.log('Passworde was cheenged');
      }
    });
  }


  passwordChange = (name, value) => {
    const { password } = this.state;
    this.setState({ password: { ...password, [name]: value } });
  }

  render() {
    const { password, profile } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
          <ListForm />
          <Switch>
            <Route exact path="/profile/account">
              <Account handleSubmit={this.submitAccount} accountChange={this.accountChange} profile={profile} />
            </Route>
            <Route exact path="/profile/password">
              <Password handleSubmit={this.submitPassword} passwordChange={this.passwordChange} password={password} />
            </Route>
          </Switch>

        </div>
      </div>
    );
  }
}
export default Profile;
