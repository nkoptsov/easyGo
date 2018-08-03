const Validator = require('validator');
const _ = require('lodash');

const { User, Profile } = require('../models');

module.exports = {
  loginValidation(data) {
    let errors = {};
  
    if(Validator.isEmpty(data.login)) errors.login = 'This field is required';
    if(Validator.isEmpty(data.password)) errors.password = 'This field is required';
  
    return {
      errors,
      isValide: _.isEmpty(errors),
    }
  },

  registerValidation(data) {
    let errors = {};
  
    if(Validator.isEmpty(data.login)) errors.login = 'This field is required';
    if(!Validator.isEmail(data.email)) errors.email = 'Not correct email!';
    if(Validator.isEmpty(data.email)) errors.email = 'This field is required';
    if(Validator.isEmpty(data.password)) errors.password = 'This field is required';
    if(Validator.isEmpty(data.firstName)) errors.firstName = 'This field is required';
    if(Validator.isEmpty(data.lastName)) errors.lastName = 'This field is required';
    if(Validator.isEmpty(data.phoneNumber)) errors.phoneNumber = 'This field is required';
  
    return {
      errors,
      isValide: _.isEmpty(errors),
    }
  },

  validateInput(data, otherValidations) {
    let { errors } = otherValidations(data);
  
    return Promise.all([
      User.findOne({ where: { login: data.login }})
        .then((user) => {
          if(user) errors.login = 'There is user with such login';
        }),
      Profile.findOne({ where: { email: data.email }})
        .then((user) => {
          if(user) errors.email = 'There is user with such email';
        }) 
    ])
      .then(() => {
        return {
          errors,
          isValid: _.isEmpty(errors),
        }
      })
  },

  validateLoginInput(data, otherValidations) {
    let { errors } = otherValidations(data);

    console.log(errors.login);
  
    return User.findOne({ where: { login: data.login }})
      .then((user) => {
        if(!user && !errors.login) errors.login = 'There is no user with such login';
      })
      .then(() => {
        return {
          errors,
          isValid: _.isEmpty(errors)
        }
      })
  }
  
}