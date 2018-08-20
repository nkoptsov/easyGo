import React, { Component } from 'react';
import {
  Container, Col, Row, CardImg, Form, Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

import FormGroupProfile from '../FormGroup/FormGroupProfile';
import FormDropDown from '../FormGroup/FormDropDown';
import './Account.css';

class Account extends Component {
  constructor(props) {
    super(props);
    this.login = React.createRef();
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.phoneNumber = React.createRef();
    this.email = React.createRef();
    this.birthday = React.createRef();
    this.city = React.createRef();
    this.country = React.createRef();
    this.gender = React.createRef();
    this.about = React.createRef();
  }

  handelSubmit = (event) => {
    const { submitAccount, profile } = this.props;
    const profileArray = Object.keys(profile);
    const accountChange = {};

    profileArray.forEach((element) => {
      if (element === 'photo') {
        return;
      }
      (this[element].current.value === '') ? accountChange[element] = null
        : accountChange[element] = this[element].current.value;
    });

    event.preventDefault();
    submitAccount(accountChange);
  };

  render() {
    const {
      login,
      firstName,
      lastName,
      phoneNumber,
      email,
      birthday,
      city,
      country,
      gender,
      photo,
      about,
    } = this.props.profile;

    return (

      <Container>
        <Row>
          <Col xs="6" left>
            <Form onSubmit={this.handelSubmit}>
              <FormGroupProfile
                className="form-control"
                htmlFor="login"
                type="text"
                id="login"
                placeholder="Enter your login"
                name="login"
                label="Login"
                defaultValue={login}
                ref={this.login}
              />
              <FormGroupProfile
                className="form-control"
                htmlFor="firstName"
                type="text"
                id="firstName"
                placeholder="Enter your firstName"
                name="firstName"
                label="FirstName"
                defaultValue={firstName}
                ref={this.firstName}
              />
              <FormGroupProfile
                className="form-control"
                htmlFor="lastName"
                type="text"
                id="lastName"
                placeholder="Enter your lastName"
                name="lastName"
                label="LastName"
                defaultValue={lastName}
                ref={this.lastName}
              />
              <FormGroupProfile
                className="form-control"
                htmlFor="phoneNumber"
                type="tel"
                id="phoneNumber"
                placeholder="Enter your phoneNumber"
                name="phoneNumber"
                label="PhoneNumber"
                defaultValue={phoneNumber}
                ref={this.phoneNumber}
              />
              <FormGroupProfile
                className="form-control"
                htmlFor="email"
                type="text"
                id="email"
                placeholder="Enter your email"
                name="email"
                label="Email"
                defaultValue={email}
                ref={this.email}
              />
              <FormGroupProfile
                className="form-control"
                htmlFor="birthday"
                type="date"
                id="birthday"
                placeholder="Enter your birthday"
                name="birthday"
                label="Birthday"
                defaultValue={birthday}
                ref={this.birthday}
              />
              <FormGroupProfile
                className="form-control"
                htmlFor="city"
                type="text"
                id="city"
                placeholder="Enter your city"
                name="city"
                label="City"
                defaultValue={city}
                ref={this.city}
              />
              <FormGroupProfile
                className="form-control"
                htmlFor="country"
                type="text"
                id="country"
                placeholder="Enter your country"
                name="country"
                label="Country"
                defaultValue={country}
                ref={this.country}
              />
              <FormDropDown
                className="form-control"
                htmlFor="gender"
                id="gender"
                name="gender"
                label="Gender"
                defaultValue={gender}
                ref={this.gender}
                type="select"
              />
              <FormGroupProfile
                className="form-control"
                htmlFor="about"
                type="text"
                id="about"
                placeholder="Enter your about"
                name="about"
                label="About"
                defaultValue={about}
                ref={this.about}
              />
              <Button color="primary">
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs="3" right>
            <CardImg src={this.props.profile.photo} />
            <p>
              {this.props.profile.about}
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

Account.propTypes = {
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
  submitAccount: PropTypes.func.isRequired,
};

export default Account;
