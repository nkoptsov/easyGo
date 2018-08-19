import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormGroupProfile from '../FormGroup/FormGroup';

class Password extends Component {
  constructor(props) {
    super(props);
    this.lastPassword = this.lastPassword;
    this.newPassword = this.newPassword;
    this.repeatPassword = this.repeatPassword;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.props.password);
  }

  render() {
    const { lastPassword, newPassword, repeatPassword } = this.props.password;
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
            defaultValue={lastPassword}
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
            defaultValue={newPassword}
            onChange={this.newPassword}
          />
          <FormGroupProfile
            className="form-control"
            htmlFor="repeatPassword"
            type="password"
            id="repeatPassword"
            placeholder="Enter your repeatPassword"
            name="repeatPassword"
            label="repeatPassword"
            defaultValue={repeatPassword}
            onChange={this.repeatPassword}
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

};

export default Password;
