import React, {Component} from 'react';
import Header from '../../Components/Header/Header';
import LoginForm from '../../Components/LoginForm/LoginForm';

class Login extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit = (data) => {
        fetch('/api/users/login', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify(data)
        }).then((res) => {
            if(res.status === 200) this.props.history.push('/');
        } )
    };

    render() {
        return (
            <div>
                <Header/>
                <main>
                    <LoginForm submit={this.submit}/>
                </main>
            </div>
        )
    }
}

export default Login;
