import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import classnames from 'classnames';
import axios from 'axios';
import FormGroup from '../FormGroup/FormGroup';

import { options } from './RegisterFormOptions';
import './RegisterForm.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: '',
        lastName: '',
        login: '',
        password: '',
        email: '',
        phoneNumber: '',
      },
      shouldRedirect: false,
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ errors: {} });
    const { data } = this.state;
    axios.post('/api/users/register', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => this.setState({ shouldRedirect: true }))
      .catch(error => this.setState({ errors: error.response.data }));
  }

  render() {
    const { data, errors, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container col-sm-6">
        <form className="regForm" onSubmit={this.onSubmit}>
          {
            options.map(option => (
              <div key={option.id}>
                <FormGroup
                  className={classnames('form-control', { 'is-invalid': errors[option.name] })}
                  key={option.id}
                  htmlFor={option.htmlFor}
                  type={option.type}
                  id={option.id}
                  placeholder={option.placeholder}
                  name={option.name}
                  label={option.label}
                  value={data[option.name]}
                  onChange={this.onChange}
                />
                {errors[option.name] && (
                  <span className="form-text error">
                    {errors[option.name]}
                  </span>
                )}
              </div>
            ))
          }
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default RegisterForm;
