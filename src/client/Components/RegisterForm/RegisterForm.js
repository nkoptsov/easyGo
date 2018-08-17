import React, { Component }  from 'react';
import { Redirect } from 'react-router-dom';
import classnames from 'classnames';
import FormGroupValidate from '../FormGroup/FormGroupValidate';

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
    this.setState({data: { ...this.state.data, [e.target.name]: e.target.value } });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ errors: {} });
    const data = JSON.stringify(this.state.data);
    fetch('/api/users/register', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: data
    })
      .then((res) => {
        if (res.status === 200) {
           this.setState({ shouldRedirect: true });
        }
        else {
          res.json()
          .then((res) => this.setState({errors : res}))
        }
      })
      .catch((err) => console.log(`request failed ${err.message}`));
  };

  render() {
    const { data, errors, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/login" />;
    }

     return (
      <div className="container col-sm-6">
        <form className="regForm" onSubmit={this.onSubmit}>
          <FormGroupValidate
            className={classnames('form-control', {'is-invalid': errors.login})}
            for="login"
            type="text"
            id="login"
            placeholder="Enter your login"
            name="login"
            label="Login"
            value={data.login}
            onChange={this.onChange}
          />
          {errors.login && <span className="form-text error">{errors.login}</span>}
          <FormGroupValidate
            className={classnames('form-control', {'is-invalid': errors.login})}
            for="email"
            type="text"
            id="email"
            placeholder="Enter your email"
            name="email"
            label="Email"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <span className="form-text error">{errors.email}</span>}
          <FormGroupValidate
            className={classnames('form-control', {'is-invalid': errors.login})}
            for="password"
            type="password"
            id="password"
            placeholder="Enter your password"
            name="password"
            label="Password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <span className="form-text error">{errors.password}</span>}
          <FormGroupValidate
            className={classnames('form-control', {'is-invalid': errors.login})}
            for="firstName"
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            name="firstName"
            label="First Name"
            value={data.firstName}
            onChange={this.onChange}
          />
          {errors.firstName && <span className="form-text error">{errors.firstName}</span>}
          <FormGroupValidate
            className={classnames('form-control', {'is-invalid': errors.login})}
            for="lastName"
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            name="lastName"
            label="Last Name"
            value={data.lastName}
            onChange={this.onChange}
          />
          {errors.lastName && <span className="form-text error">{errors.lastName}</span>}
          <FormGroupValidate
            className={classnames('form-control', {'is-invalid': errors.login})}
            for="phoneNumber"
            type="text"
            id="phoneNumber"
            placeholder="Enter your phone number"
            name="phoneNumber"
            label="Phone Number"
            value={data.phoneNumber}
            onChange={this.onChange}
          />
          {errors.phoneNumber && <span className="form-text error">{errors.phoneNumber}</span>}
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
export default RegisterForm;
