import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import ListForm from '../../Components/ListForm/ListForm';
import Password from '../../Components/Password/Password';
import Account from '../../Components/Account/Account';
import Photo from '../../Components/Photo/Photo';

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
  };

  accountChange = (name, value) => {
    const { profile } = this.state;
    this.setState({ profile: { ...profile, [name]: value } });
  };

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
  };

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
        console.log('Password was changed');
      }
    });
  };

  passwordChange = (name, value) => {
    const { password } = this.state;
    this.setState({ password: { ...password, [name]: value } });
  };

  submitPhoto = (file) => {
    const data = new FormData();
    data.append('file', file.file);
    fetch('/api/users/profile/photo', {
      method: 'POST',
      credentials: 'include',
      body: data,
    }).then((value) => {
    });
  };

  photoChange = (file) => {
    const { photo } = this.state;
    this.setState({ photo: { ...photo, file } });
  };

  render() {
    const { password, profile, photo } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
          <ListForm />
          <Switch>
            <Route exact path="/profile/account">
              <Account
                handleSubmit={this.submitAccount}
                accountChange={this.accountChange}
                profile={profile}
              />
            </Route>
            <Route exact path="/profile/password">
              <Password
                handleSubmit={this.submitPassword}
                passwordChange={this.passwordChange}
                password={password}
              />
            </Route>
            <Route exact path="/profile/photo">
              <Photo
                handleSubmit={this.submitPhoto}
                photoChange={this.photoChange}
                photo={photo}
              />
            </Route>
          </Switch>

        </div>
      </div>
    );
  }
}
export default Profile;
