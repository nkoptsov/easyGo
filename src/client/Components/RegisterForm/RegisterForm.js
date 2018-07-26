import React, { Component }  from 'react';
import FormGroup from '../FormGroup/FormGroup';

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
      errors: {}
    };
  }
  onChange = (e) => { 
    this.setState({data: { ...this.state.data, [e.target.name]: e.target.value } });
    console.log(this.state);
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.submit(this.state.data)
  }

  render() {
    const { data } = this.state;
 
     return (
      <div className="container col-sm-6">
        <form className="regForm" onSubmit={this.onSubmit}>
          <FormGroup for="login" type="text" id="login" placeholder="Enter your login" name="login" label="Login" value={data.login} onChange={this.onChange} />
          <FormGroup for="email" type="email" id="email" placeholder="Enter your email" name="email" label="Email" value={data.email} onChange={this.onChange} />
          <FormGroup for="password" type="password" id="password" placeholder="Enter your password" name="password" label="Password" value={data.password} onChange={this.onChange} />
          <FormGroup for="firstName" type="text" id="firstName" placeholder="Enter your first name" name="firstName" label="First Name" value={data.firstName} onChange={this.onChange} />
          <FormGroup for="lastName" type="text" id="lastName" placeholder="Enter your last name" name="lastName" label="Last Name" value={data.lastName} onChange={this.onChange} />
          <FormGroup for="phoneNumber" type="text" id="phoneNumber" placeholder="Enter your phone number" name="phoneNumber" label="Phone Number" value={data.phoneNumber} onChange={this.onChange} />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
     )
  }

}
export default RegisterForm;