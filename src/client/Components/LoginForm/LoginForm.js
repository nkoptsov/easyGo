import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import FormGroupValidate from '../FormGroup/FormGroupValidate';

import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        login: '',
        password: '',
      },
      shouldRedirect: false,
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ errors: {} });
    const data = JSON.stringify(this.state.data);
    fetch('/api/users/login', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      method: 'POST',
      body: data,
    })
      .then((res) => {
        if (res.status === 200) {
          sessionStorage.setItem('user-login', JSON.stringify(data.login));
          this.setState({ shouldRedirect: true });
        }
        res.json()
          .then(res => this.setState({ errors: res }));
      });
  };

  render() {
    const { data, errors, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container col-sm-6">
        <form className="logForm" onSubmit={this.onSubmit}>
          <FormGroupValidate
            className={classnames('form-control', { 'is-invalid': errors.login })}
            for="login"
            type="text"
            id="login"
            placeholder="Enter your login"
            name="login"
            label="Login"
            value={data.login}
            onChange={this.onChange}
          />
          {errors.login && (
          <span className="form-text error">
            {errors.login}
          </span>
          )}
          <FormGroupValidate
            className={classnames('form-control', { 'is-invalid': errors.password })}
            for="password"
            type="password"
            id="password"
            placeholder="Enter your password"
            name="password"
            label="Password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && (
          <span className="form-text error">
            {errors.password}
          </span>
          )}
          <button className="btn btn-primary">
Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
