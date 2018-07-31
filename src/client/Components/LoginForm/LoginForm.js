import React, { Component } from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import FormGroup from '../FormGroup/FormGroup';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        login: '',
        password: '',
      },
      errors: {}
    };
  }

  onChange = (e) => {
    this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ errors: {} });
    const data = JSON.stringify(this.state.data); 
    fetch('/api/users/login', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      method: 'POST',
      body: data
    })
      .then((res) => {
        if(res.status === 200) return this.props.history.push('/');
        res.json()
          .then((res) => this.setState({errors : res}))
      })
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="container col-sm-6">
        <form className="logForm" onSubmit={this.onSubmit}>
          <FormGroup 
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
          {errors.login && <span className="form-text text-muted">{errors.login}</span>}
          <FormGroup 
            className={classnames('form-control', {'is-invalid': errors.password})} 
            for="password" 
            type="password" 
            id="password" 
            placeholder="Enter your password"
            name="password" 
            label="Password" 
            value={data.password} 
            onChange={this.onChange}
          />
          {errors.password && <span className="form-text text-muted">{errors.password}</span>}
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm);