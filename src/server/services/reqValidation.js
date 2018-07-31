const Validator = require('validator');
const _ = require('lodash');

module.exports = {
  reqValidation(data) {
    let errors = {};
  
    if(Validator.isEmpty(data.login)) errors.login = 'This field is required';
    if(Validator.isEmpty(data.password)) errors.password = 'This field is required';
  
    return {
      errors,
      isValide: _.isEmpty(errors),
    }
  }
}