import React, { Component } from 'react';
import ListForm from '../ListForm/ListForm';
// import Password from '../Password/Password'
import Account from '../Account/Account';

import { Route, Switch } from 'react-router-dom';
class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        fistName: '',
        lastNAme: '',
        lonign: '',
        photo: '',
        phoneNumber: '',
        lastName: '',
        gender: '',
        login: '',
        birthday: '',
        about: '',
        country: '',
        email: '',
        firstName: '',
      }
      // firstName: { type: text, id: firstName, placeholder: 'Enter your firstName', label: firstName, value: '' },
      // lastName: { type: text, id: lastName, placeholder: 'Enter your lastName', label: firstName, value: '' },
      // login: { type: text, id: login, placeholder: 'Enter your login', label: login, value: '' }

    }
  }
  componentDidMount() {
    this.requestAccount();

  }
  requestAccount = () => {
    let a;
    fetch('/api/users/profile/3')
      .then(value => value.json())
      .then(profile => {
        console.log(profile);
        this.setState({
          data: { profile }
        });
      })


  }
  submitAccount = (body) => {
    fetch('/api/users/profile', {
      mathod: 'POST',
      headers: 'Content-type: application/jsom',
      body: JSON.stringify(body)
    }).then((
      this.setState({ data: { value } })
    ))
  }

  requestPassword = () => {
    fetch('/api/users/profile').then((value) => {
      this.setState({ data: { value } });
    })
  }
  render() {

    return (
      <div>
        <ListForm />
        <div>
          {/* <Route path="/password" component={Password} /> */}
          <Switch>
            <Route exact path="/profile/:account">
              <Account handleSubmit={this.submitAccount} requestAccount={this.requestAccount} {...this.state} />
            </Route>

          </Switch>
        </div>
      </div>
    )
  }
}
export default ProfileForm