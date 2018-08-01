import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import RegisterForm from '../../Components/RegisterForm/RegisterForm';

class Register extends Component {
  constructor(props) {
    super(props);
    
  } 
    render() {      
      return ( 
      <div>
        <Header />
        <main>
          <RegisterForm />
        </main>
      </div>
    )
  }
}

export default withRouter(Register);