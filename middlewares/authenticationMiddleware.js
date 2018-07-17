module.exports = function authenticationMiddleware(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect(401, '/users/login');
};