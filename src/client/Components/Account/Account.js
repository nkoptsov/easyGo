import React, { Component } from 'react'
import FormGroup from '../FormGroup/FormGroup'
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  // componentDidMount() {
  //   this.props.requestAccount()
  // }
  // handelSubmit = (event) => {
  //   event.prevent();
  //   this.props.handleSubmit(this.props.data);
  // }
  render() {
    return (
      <div className="container col-sm-6">
        <form onSubmit={this.handelSubmit}>
          <FormGroup for="login" type="text" id="login" placeholder="Enter your login" name="login" label="Login" value={this.props.data.profile.login} onChange={this.onChange} />
          <FormGroup for="firstName" type="text" id="firstName" placeholder="Enter your firstName" name="firstName" label="firstName" value={this.props.data.profile.login} onChange={this.onChange} />
          <FormGroup for="lastName" type="text" id="lastName" placeholder="Enter your lastName" name="lastName" label="lastName" value={this.props.data.profile.User.login} onChange={this.onChange} />
        </form>
      </div>
    )
  }
}
export default Account