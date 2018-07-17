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

  updateProfile(req, res) {
    const { id } = req.user;
    const { body } = req;
    // body and id
    const result = updateUserAndProfile(id, body);
    result
      .then((value) => {
        console.log('good');
        console.log(value);
      })
      .catch((err) => {
        console.log(err);
      });
    // return Profile.findById(id).then((userProfile) => {
    //   if (!userProfile) {
    //     return res.status(404).json({ message: `UserProfile with id ${req.params.id} not found.` });
    //   }

    //   return userProfile.update(req.body)
    //     .then(() => res.status(200).json({ message: 'UserProfile updated successfully.' }));
    // })
    //   .catch(error => res.status(404).json({ message: `Something went wrong with id ${id}, ${error}` }));
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
