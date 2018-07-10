const { Profile, User } = require('../models');

module.exports = {
  getProfile(req, res) {
    const { id } = req.params;
    Profile.findOne({ where: { id }, include: [{ model: User, attributes: ['login', 'email'], required: true }] })
      .then((userProfile) => {
        if (!userProfile) {
          return res.status(404).json({ massage: `User not found with id ${id}` });
        }
        return res.status(200).json(userProfile).send();
      })
      .catch(error => res.status(404).json({ message: `Something went wrong with id ${id}, ${error}` }));
  },

  updateProfile(req, res) {
    if (!req.body) {
      return res.status(400).json('No request body');
    }
    /* if (!(req.body.firstName && req.body.lastName && req.body.phoneNumber && req.body.city
      && req.body.country && req.body.birthday && req.body.gender && req.body.photo
      && req.body.about)) {
      return res.status(400).json({ message: 'Request body not includes all columns' });
    } */
    const { id } = req.params;
    return Profile.findById(id).then((userProfile) => {
      if (!userProfile) {
        return res.status(404).json({ message: `UserProfile with id ${req.params.id} not found.` });
      }
      return userProfile.update(req.body)
        .then(() => res.status(200).json({ message: 'UserProfile updated successfully.' }));
    })
      .catch(error => res.status(404).json({ message: `Something went wrong with id ${id}, ${error}` }));
  },

  removeProfile(req, res) {
    const { id } = req.params; //
    Profile.findById(id)
      .then((userProfile) => {
        if (!userProfile) {
          return res.status(404).json({ massage: `User not found with id ${id}` });
        }
        return userProfile.destroy()
          .then(() => res.status(400).send());
      })
      .catch(() => res.status(404).json({ massage: `User not found with id ${id}` }));
  },
};
