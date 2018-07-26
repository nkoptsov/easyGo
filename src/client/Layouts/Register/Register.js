import React, {Component} from 'react';
import Header from '../../Components/Header/Header';
import RegisterForm from '../../Components/RegisterForm/RegisterForm';

class Register extends Component {
  constructor(props) {
    super(props);   
    
    this.submit = this.submit.bind(this);
  } 
  submit = (data) => {
    console.log(data);
    
    fetch('/api/users/register', {
      
      method: 'POST',
      body: JSON.stringify(data)
    }).then(response => console.log(response.json())
    )
  }
    render() {      
      return ( 
      <div>
        <Header />
        <main>
          <RegisterForm submit={this.submit}/>
        </main>
      </div>
    )
  }
}

export default Register;