const isAuthorized = () => {
  if (sessionStorage.getItem('user-login')) {
    return true;
  }
  return false;
};

  }
  return false;
};
export default isAuthorized;
