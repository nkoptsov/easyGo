function validateBody(req) {
  if (!req.body) {
    return false;
  }
  if ('id' in req.body || 'userId' in req.body) {
    return false;
  }
  if (!(('firstName' in req.body)
        && ('lastName' in req.body)
        && ('phoneNumber' in req.body)
        && ('city' in req.body)
        && ('country' in req.body)
        && ('birthday' in req.body)
        && ('gender' in req.body)
        && ('photo' in req.body)
        && ('about' in req.body))) {
    return false;
  }
  return true;
}

module.exports = validateBody;
