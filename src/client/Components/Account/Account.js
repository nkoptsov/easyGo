import React, { Component } from 'react';
import FormGroup from '../FormGroup/FormGroup';
import FormDropDown from '../FormGroup/FormDropDown';

class Account extends Component {
  constructor(props) {
    super(props);
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.props.accountChange(name, value);

    // console.log(this.state);
  }

  // componentDidMount() {
  //   this.props.requestAccount()
  // }
  handelSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.props.profile);
  }

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
      about,
    } = this.props.profile;
    return (
      <div className="container col-sm-6">
        <form onSubmit={this.handelSubmit}>
          <FormGroup for="login" type="text" id="login" placeholder="Enter your login" name="login" label="Login" value={login} onChange={this.onChange} />
          <FormGroup for="firstName" type="text" id="firstName" placeholder="Enter your firstName" name="firstName" label="FirstName" value={firstName} onChange={this.onChange} />
          <FormGroup for="lastName" type="text" id="lastName" placeholder="Enter your lastName" name="lastName" label="LastName" value={lastName} onChange={this.onChange} />
          <FormGroup for="phoneNumber" type="tel" id="phoneNumber" placeholder="Enter your phoneNumber" name="phoneNumber" label="PhoneNumber" value={phoneNumber} onChange={this.onChange} />
          <FormGroup for="email" type="text" id="email" placeholder="Enter your email" name="email" label="Email" value={email} onChange={this.onChange} />
          <FormGroup for="birthday" type="text" id="birthday" placeholder="Enter your birthday" name="birthday" label="Birthday" value={birthday} onChange={this.onChange} />
          <FormGroup for="city" type="text" id="city" placeholder="Enter your city" name="city" label="City" value={city} onChange={this.onChange} />
          <FormGroup for="country" type="text" id="country" placeholder="Enter your country" name="country" label="Country" value={country} onChange={this.onChange} />
          <FormDropDown for="gender" id="gender" name="gender" label="Gender" value={gender} onChange={this.onChange} />
          <FormGroup for="about" type="text" id="about" placeholder="Enter your about" name="about" label="About" value={about} onChange={this.onChange} />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Account;
