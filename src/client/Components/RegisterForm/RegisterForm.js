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
    this.setState({data: {...this.state.data, [e.target.name]: e.target.value } })
  }
  onSubmit = (data) => {
     console.log(data) 
  }

  render() {

    const { data } = this.state;
 
     return (
      <div className="container col-sm-6">
        <form>
          <FormGroup for="login" type="text" id="login" placeholder="Enter your login" name="login" label="Login" value={data.login} onChange={this.onChange} />
          <FormGroup for="email" type="email" id="login" placeholder="Enter your email" name="email" label="Email" value={data.email} onChange={this.onChange} />
          <FormGroup for="password" type="password" id="login" placeholder="Enter your password" name="password" label="Password" value={data.password} onChange={this.onChange} />
          <FormGroup for="firstName" type="text" id="login" placeholder="Enter your first name" name="firstName" label="First Name" value={data.firstName} onChange={this.onChange} />
          <FormGroup for="lastName" type="text" id="login" placeholder="Enter your last name" name="lastName" label="Last Name" value={data.lastName} onChange={this.onChange} />
          <FormGroup for="phoneNumber" type="text" id="login" placeholder="Enter your phone number" name="phoneNumber" label="Phone Number" value={data.phoneNumber} onChange={this.onChange} />
          <button type="submit" className="btn btn-primary" onSubmit={this.onSubmit}>Submit</button>
        </form>
      </div>
     )
  }

}
export default RegisterForm;