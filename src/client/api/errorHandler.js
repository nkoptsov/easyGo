function errorCreate(arrayField) {
  const error = {};
  arrayField.forEach((field) => {
    switch (field) {
      case 'login':
        error[field] = 'This field is required';
        break;
      case 'firstName':
        error[field] = 'This field is required and latin letters allowed';
        break;
      case 'phoneNumber':
        error[field] = ' correct phone number';
        break;
      case 'email':
        error[field] = 'This field is required';
        break;
      case 'birthday':
        error[field] = 'This field is required';
        break;
      case 'city':
        error[field] = 'This field is required';
        break;
      case 'country':
        error[field] = 'This field is required';
        break;
      case 'gender':
        error[field] = 'This field is required';
        break;
      case 'about':
        error[field] = 'This field is required';
        break;
      default:
        error[field] = 'This field is required and latin letters allowed';
    }
  });
  return error;
}
export default errorCreate;
