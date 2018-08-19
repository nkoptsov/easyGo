import React, { Component } from 'react';
import FormGroup from '../FormGroup/FormGroup';

class Password extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.props.password);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.passwordChange(name, value);
  };

  render() {
    const { lastPassword, newPassword, repeatPassword } = this.props;
    return (
      <div className="container col-sm-6">
        <form onSubmit={this.handleSubmit}>
          <FormGroup
            className="form-control"
            htmlFor="lastPassword"
            type="password"
            id="lastPassword"
            placeholder="Enter your lastPassword"
            name="lastPassword"
            label="lastPassword"
            value={lastPassword}
            onChange={this.handleChange}
          />
          <FormGroup
            className="form-control"
            htmlFor="newPassword"
            type="password"
            id="newPassword"
            placeholder="Enter your newPassword"
            name="newPassword"
            label="newPassword"
            value={newPassword}
            onChange={this.handleChange}
          />
          <FormGroup
            className="form-control"
            htmlFor="repeatPassword"
            type="password"
            id="repeatPassword"
            placeholder="Enter your repeatPassword"
            name="repeatPassword"
            label="repeatPassword"
            value={repeatPassword}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Password;
