import React, {Component} from 'react';
import Header from '../../Components/Header/Header';
import RegisterForm from '../../Components/RegisterForm/RegisterForm';

class Register extends Component {
  constructor(props) {
    super(props);
    
  } 
  handleSubmit = (data) => {      
    fetch('/api/users/register', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    }).then(response => console.log(response)
    )
  }
    render() {      
      return ( 
      <div>
        <Header />
        <main>
          <RegisterForm handleSubmit={this.handleSubmit}/>
        </main>
      </div>
    )
  }
}

export default Register;