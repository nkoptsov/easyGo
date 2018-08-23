import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../../Components/Header/Header';
import ListForm from '../../Components/ListForm/ListForm';
import Password from '../../Components/Password/Password';
import Account from '../../Components/Account/Account';
import { fetchProfie, changeProfile, changePassword, uploadPhoto } from '../../Redux/Actions/profileAction';
import Photo from '../../Components/Photo/Photo';

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
    this.props.changeProfile(data);
  };

  submitPassword = (newPassword) => {
    this.props.changePassword(newPassword);
  };

  submitPhoto = (file) => {
    const data = new FormData();
    data.append('file', file);
    this.props.uploadPhoto(data);
  };


  render() {
    const { profile, error } = this.props;
    const { photo } = this.props.profile;
    const { password } = this.state;

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
                error={error}
              />
            </Route>
            <Route exact path="/profile/password">
              <Password
                submitPassword={this.submitPassword}
                password={password}
              />
            </Route>
            <Route exact path="/profile/photo">
              <Photo
                handleSubmit={this.submitPhoto}
                photo={photo}
              />
            </Route>
          </Switch>

        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile.profile,
  error: state.profile.profile,
});

const mapDispatchToProps = {
  fetchProfie,
  changeProfile,
  changePassword,
  uploadPhoto,
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
    photo: PropTypes.string,
  }).isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
