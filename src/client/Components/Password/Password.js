import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormGroupProfile from '../FormGroup/FormGroupProfile';

class Password extends Component {
  constructor(props) {
    super(props);
    this.lastPassword = React.createRef();
    this.newPassword = React.createRef();
    this.repeatPassword = React.createRef();
  }

  handleSubmit = (event) => {
    const { submitPassword, password } = this.props;
    const passwordArray = Object.keys(password);
    const passwordChange = {};

    passwordArray.forEach((element) => {
      passwordChange[element] = this[element].current.value;
    });

    event.preventDefault();
    submitPassword(passwordChange);
  }

  render() {
    return (
      <div className="container col-sm-6">
        <form onSubmit={this.handleSubmit}>
          <FormGroupProfile
            className="form-control"
            htmlFor="lastPassword"
            type="password"
            id="lastPassword"
            placeholder="Enter your lastPassword"
            name="lastPassword"
            label="lastPassword"
            ref={this.lastPassword}
          />
          <FormGroupProfile
            className="form-control"
            htmlFor="newPassword"
            type="password"
            id="newPassword"
            placeholder="Enter your newPassword"
            name="newPassword"
            label="newPassword"
            ref={this.newPassword}
          />
          <FormGroupProfile
            className="form-control"
            htmlFor="repeatPassword"
            type="password"
            id="repeatPassword"
            placeholder="Enter your repeatPassword"
            name="repeatPassword"
            label="repeatPassword"
            ref={this.repeatPassword}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
Password.propTypes = {
  password: PropTypes.shape({
    lastPassword: PropTypes.string,
    newPassword: PropTypes.string,
    repeatPassword: PropTypes.string,
  }).isRequired,
  submitPassword: PropTypes.func.isRequired,
};

export default Password;
