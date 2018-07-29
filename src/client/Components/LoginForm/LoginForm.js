import React, {Component} from 'react';
import FormGroup from '../FormGroup/FormGroup';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                login: '',
                password: '',
            },
            errors: {}
        };
    }

    onChange = (e) => {
        this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.submit(this.state.data)
    };

    render() {
        const { data } = this.state;
        return (
            <div className="container col-sm-6">
                <form className="logForm" onSubmit={this.onSubmit}>
                    <FormGroup for="login" type="text" id="login" placeholder="Enter your login" name="login"
                               label="Login" value={data.login} onChange={this.onChange}/>
                    <FormGroup for="password" type="password" id="password" placeholder="Enter your password"
                               name="password" label="Password" value={data.password} onChange={this.onChange}/>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;