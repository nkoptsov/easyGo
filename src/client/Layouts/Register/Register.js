import React from 'react';
import Header from '../../Components/Header/Header';
import RegisterForm from '../../Components/RegisterForm/RegisterForm';

class Register extends Component {
  constructor(props) {
    super(props);     
  } 
  submit = (data) => {
    fetch('/api/users/register', {
      headers: {
        'Content-Type': 'application/json'
      },
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