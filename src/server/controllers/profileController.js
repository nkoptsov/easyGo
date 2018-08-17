const fs = require('fs');
const { updateUserAndProfile } = require('../services/updateUserAndProfile');
const { Profile, User } = require('../models');

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
        const userRequest = {
          phoneNumber: userProfile.phoneNumber || '',
          lastName: userProfile.lastName || '',
          gender: userProfile.gender || '',
          login: userProfile.User.login || '',
          birthday: userProfile.birthday || '',
          about: userProfile.about || '',
          country: userProfile.country || '',
          city: userProfile.city || '',
          email: userProfile.email || '',
          firstName: userProfile.firstName || '',
          photo: userProfile.photo || '',
        };
        return res.status(200).json(userRequest);
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
        console.log(err);
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

  savePhoto(req, res, next) {
    const { id } = req.user;
    const buffer = req.files.file.data;
    const imgName = id + Math.random().toString(36).substr(2, 5);
    const photoUrl = `http://localhost:3000/public/images/${imgName}.jpg`;

    fs.writeFile(`./public/images/${imgName}.jpg`, buffer, err => console.log(err));

    return Profile.find({
      where: {
        userId: id,
      },
    })
      .then((profile) => {
        if (!profile) {
          error.name = 'profileNotFound';
          next(error);
        }
        profile.update({ photo: photoUrl });
        return res.status(200).json('Password successfully changed');
      });
  },
};
