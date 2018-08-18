import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import register from '../../Redux/Actions/register';

import FormGroup from '../FormGroup/FormGroup';

import { options } from './RegisterFormOptions';
import './RegisterForm.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: '',
        lastName: '',
        login: '',
        password: '',
        email: '',
        phoneNumber: '',
      },
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ errors: {} });
    const { data } = this.state;

    this.props.register(data, this.props.history);
  }

  render() {
    const { data, errors } = this.state;
    return (
      <div className="container col-sm-6">
        <form className="regForm" onSubmit={this.onSubmit}>
          {
            options.map(option => (
              <div key={option.id}>
                <FormGroup
                  className={classnames('form-control', { 'is-invalid': errors[option.name] })}
                  key={option.id}
                  htmlFor={option.htmlFor}
                  type={option.type}
                  id={option.id}
                  placeholder={option.placeholder}
                  name={option.name}
                  label={option.label}
                  required
                  value={data[option.name]}
                  onChange={this.onChange}
                />
                {errors[option.name] && (
                  <span className="form-text error">
                    {errors[option.name]}
                  </span>
                )}
              </div>
            ))
          }
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { register })(withRouter(RegisterForm));
