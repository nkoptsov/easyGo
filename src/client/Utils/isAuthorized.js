const isAuthorized = () => {
  if (sessionStorage.getItem('user-login')) {
    return true;
  } else {
    return false;
  }
}
export default isAuthorized;
