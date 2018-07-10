function validateBody(req) {
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
