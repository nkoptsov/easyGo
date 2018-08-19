import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../../Components/Header/Header';
import ListForm from '../../Components/ListForm/ListForm';
import Password from '../../Components/Password/Password';
import Account from '../../Components/Account/Account';
import { fetchProfie, submitProfile } from '../../Redux/Actions/profileAction';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: {
        lastPassword: '',
        newPassword: '',
        repeatPassword: '',
      },
    };
  }

  componentDidMount() {
    this.props.fetchProfie();
  }

  submitAccount = (data) => {
    this.props.submitProfile(data);
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
        console.log('Passworde was cheenged');
      }
    });
  };


  passwordChange = (name, value) => {
    const { password } = this.state;
    this.setState({ password: { ...password, [name]: value } });
  }

  render() {
    const { password } = this.state;
    const { profile } = this.props;
    return (
      <div>
        <Header />
        <div className="container">
          <ListForm />
          <Switch>
            <Route exact path="/profile/account">
              <Account
                submitAccount={this.submitAccount}
                profile={profile}
              />
            </Route>
            <Route exact path="/profile/password">
              <Password
                passwordChange={this.passwordChange}
                password={password}
                handleSubmit={this.submitPassword}
              />
            </Route>
          </Switch>

        </div>
      </div>
    );
  }
}

const mapStateToPropps = state => ({
  profile: state.Profile.profile,
});

const mapDispatchToProps = {
  fetchProfie,
  submitProfile,
};

Profile.propTypes = {
  profile: PropTypes.shape({
    login: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    birthday: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    gender: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,

};

export default connect(mapStateToPropps, mapDispatchToProps)(Profile);
