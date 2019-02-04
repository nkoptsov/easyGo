module.exports = function authenticationMiddleware(req, res, next) {
  // console.log(111, req.cookies = '1111');
  console.log(111, req.cookies);
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect(401, '/users/login');
};
