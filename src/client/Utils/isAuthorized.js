const isAuthorized = () => {
  if (sessionStorage.getItem('user-login')) {
    return true;
  }
  return false;
};

export default isAuthorized;