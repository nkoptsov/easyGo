import React from 'react';
import FormGroup from '../FormGroup/FormGroup';

const RegisterForm = () => (
  <div class="container col-sm-6">
    <form>
      <FormGroup for="login" type="text" id="login" placeholder="Enter your login" name="Login" />
      <FormGroup for="email" type="email" id="login" placeholder="Enter your email" name="Email" />
      <FormGroup for="password" type="password" id="login" placeholder="Enter your password" name="Password" />
      <FormGroup for="firstName" type="text" id="login" placeholder="Enter your first name" name="First Name" />
      <FormGroup for="lastName" type="text" id="login" placeholder="Enter your last name" name="Last Name" />
      <FormGroup for="phoneNumber" type="text" id="login" placeholder="Enter your phone number" name="Phone Number" />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
)

export default RegisterForm;