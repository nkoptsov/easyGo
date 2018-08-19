import React, { Component } from 'react';
import {
  Container, Col, Row, CardImg, Form, Button,
} from 'reactstrap';
import FormsGroup from '../FormGroup/FormGroup';
import FormDropDown from '../FormGroup/FormDropDown';
import './Account.css';

class Account extends Component {
  constructor(props) {
    super(props);
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.props.accountChange(name, value);
  };

  handelSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.props.profile);
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
          <Col xs="6" float left>
            <Form onSubmit={this.handelSubmit}>
              <FormsGroup
                className="form-control"
                htmlFor="login"
                type="text"
                id="login"
                placeholder="Enter your login"
                name="login"
                label="Login"
                value={login}
                onChange={this.onChange}
              />
              <FormsGroup
                className="form-control"
                htmlFor="firstName"
                type="text"
                id="firstName"
                placeholder="Enter your firstName"
                name="firstName"
                label="FirstName"
                value={firstName}
                onChange={this.onChange}
              />
              <FormsGroup
                className="form-control"
                htmlFor="lastName"
                type="text"
                id="lastName"
                placeholder="Enter your lastName"
                name="lastName"
                label="LastName"
                value={lastName}
                onChange={this.onChange}
              />
              <FormsGroup
                className="form-control"
                htmlFor="phoneNumber"
                type="tel"
                id="phoneNumber"
                placeholder="Enter your phoneNumber"
                name="phoneNumber"
                label="PhoneNumber"
                value={phoneNumber}
                onChange={this.onChange}
              />
              <FormsGroup
                className="form-control"
                htmlFor="email"
                type="text"
                id="email"
                placeholder="Enter your email"
                name="email"
                label="Email"
                value={email}
                onChange={this.onChange}
              />
              <FormsGroup
                className="form-control"
                htmlFor="birthday"
                type="date"
                id="birthday"
                placeholder="Enter your birthday"
                name="birthday"
                label="Birthday"
                value={birthday}
                onChange={this.onChange}
              />
              <FormsGroup
                className="form-control"
                htmlFor="city"
                type="text"
                id="city"
                placeholder="Enter your city"
                name="city"
                label="City"
                value={city}
                onChange={this.onChange}
              />
              <FormsGroup
                className="form-control"
                htmlFor="country"
                type="text"
                id="country"
                placeholder="Enter your country"
                name="country"
                label="Country"
                value={country}
                onChange={this.onChange}
              />
              <FormDropDown
                className="form-control"
                htmlFor="gender"
                id="gender"
                name="gender"
                label="Gender"
                value={gender}
                onChange={this.onChange}
              />
              <FormsGroup
                className="form-control"
                htmlFor="about"
                type="text"
                id="about"
                placeholder="Enter your about"
                name="about"
                label="About"
                value={about}
                onChange={this.onChange}
              />
              <Button color="primary">
              Submit
              </Button>
            </Form>
          </Col>
          <Col xs="3" float-right>
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
export default Account;
