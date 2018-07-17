module.exports = function authenticationMiddleware(req, res, next) {
  // if (req.isAuthenticated()) {
  //   return next();
  // }
  // return res.redirect(401, '/users/login');
  return next();
};
