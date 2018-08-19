const Validator = require('validator');
const _ = require('lodash');

const { User, Profile } = require('../models');

module.exports = {
  loginValidation(data) {
    const errors = {};

    if (Validator.isEmpty(data.login)) errors.login = 'This field is required';
    if (Validator.isEmpty(data.password)) errors.password = 'This field is required';

    return {
      errors,
      isValide: _.isEmpty(errors),
    };
  },

  registerValidation(data) {
    const errors = {};

    if (Validator.isEmpty(data.login)) errors.login = 'This field is required';
    if (!Validator.isEmail(data.email)) errors.email = 'Not correct email!';
    if (Validator.isEmpty(data.email)) errors.email = 'This field is required';
    if (!Validator.isLength(data.password, { min: 5, max: 15 })) errors.password = 'Password length must be of 5-15 characters';
    if (Validator.isEmpty(data.password)) errors.password = 'This field is required';
    if (!Validator.isAlpha(data.firstName)) errors.firstName = 'Only latin letters allowed';
    if (Validator.isEmpty(data.firstName)) errors.firstName = 'This field is required';
    if (!Validator.isAlpha(data.lastName)) errors.lastName = 'Only latin letters allowed';
    if (Validator.isEmpty(data.lastName)) errors.lastName = 'This field is required';
    if (!Validator.isMobilePhone(data.phoneNumber, 'any')) errors.phoneNumber = 'Not correct phone number';
    if (Validator.isEmpty(data.phoneNumber)) errors.phoneNumber = 'This field is required';

    return {
      errors,
      isValide: _.isEmpty(errors),
    };
  },

  validateInput(data, otherValidations) {
    const { errors } = otherValidations(data);

    return Promise.all([
      User.findOne({ where: { login: data.login } })
        .then((user) => {
          if (user) errors.login = 'There is user with such login';
        }),
      Profile.findOne({ where: { email: data.email } })
        .then((user) => {
          if (user) errors.email = 'There is user with such email';
        }),
    ])
      .then(() => ({
        errors,
        isValid: _.isEmpty(errors),
      }));
  },

  validateLoginInput(data, otherValidations) {
    const { errors } = otherValidations(data);

    return User.findOne({ where: { login: data.login } })
      .then((user) => {
        if (!user && !errors.login) errors.password = 'There is no user with such login or password';
      })
      .then(() => ({
        errors,
        isValid: _.isEmpty(errors),
      }));
  },
};
