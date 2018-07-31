import React, {Component} from 'react';
import Header from '../../Components/Header/Header';
import LoginForm from '../../Components/LoginForm/LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          <LoginForm />
        </main>
      </div>
    )
  }
}

export default Login;
