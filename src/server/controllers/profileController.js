const { Profile, User } = require('../models');
const { updateUserAndProfile } = require('../services/updateUserAndProfile');

const error = new Error();

module.exports = {
  getProfile(req, res, next) {
    const { id } = req.user;

    Profile.findOne({ where: { userId: id }, include: [{ model: User, attributes: ['login'], required: true }] })
      .then((userProfile) => {
        if (!userProfile) {
          error.name = 'profileNotFound';
          next(error);
        }
        return res.status(200).json(userProfile);
      })
      .catch(err => next(err));
  },

  updateProfile(req, res, next) {
    const { id } = req.user;
    const { body } = req;
    // body and id
    const result = updateUserAndProfile(id, body);
    result
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        next(err);
      });
  },

  removeProfile(req, res, next) {
    const { id } = req.user;
    // change profile
    Profile.findById(id)
      .then((userProfile) => {
        if (!userProfile) {
          error.name = 'profileNotFound';
          next(error);
        }
        req.session.destroy();
        return userProfile.destroy()
          .then(() => res.status(200).end());
      })
      .catch(err => next(err));
  },


  changePassword(req, res, next) {
    const { id } = req.user;

    const { lastPassword, newPassword, repeatPassword } = req.body;

    return User.findById(id).then((user) => {
      if (!user) {
        error.name = 'profileNotFound';
        next(error);
      }
      if (!User.comparePassword(lastPassword, user.password)) {
        error.name = 'profileBadRequest';
        next(error);
      }
      if (newPassword !== repeatPassword) {
        error.name = 'profileBadRequest';
        next(error);
      }
      user.update({ password: User.generateHash(newPassword) });
      return res.status(200).json('Password successfully changed');
    });
  },
};
