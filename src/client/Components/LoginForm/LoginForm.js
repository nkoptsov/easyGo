import React from 'react';
import FormGroup from '../FormGroup/FormGroup';

const LoginForm = () => (
  <div className="container col-sm-6">
    <form>
      <FormGroup for="login" type="text" id="login" placeholder="Enter your login" name="Login" />
      <FormGroup for="password" type="password" id="password" placeholder="Enter your password" name="Email" />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
)

export default LoginForm;