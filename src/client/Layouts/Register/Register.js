import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
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
    })
      .then((res) => {
        if(res.status === 200) this.props.history.push('/login');
      })
      .catch((err) => console.log(`request failed ${err.message}`));
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

export default withRouter(Register);