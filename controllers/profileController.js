const { Profile } = require('../models');

module.exports = {
  read(req, res) {
    const { id } = req.params;
    Profile.findById(id)
      .then((element) => {
        if (!element) {
          return res.status(404).json({ message: `User not found with id ${id}` });
        }
        return res.status(200).json(element);
      })
      .catch(() => res.status(404).json({ message: `Somthing went wrong with id ${id}` }));
  },

  // check id if not number if has this id
  create(req, res) {
    Profile.create(req.body)
      .then(element => res.status(201).location(`/${element.id}/profile`))
      .catch(() => res.status(404).json({ message: 'Not found' }));
  },

  update(req, res) {
    if (!req.body) {
      return res.status(400).json('No request body');
    }
    if (!(req.body.firstName && req.body.lastName && req.body.phoneNumber && req.body.city
        && req.body.country && req.body.birthday && req.body.gender && req.body.photo
        && req.body.about)) {
      console.log('Request body no include all columns');
      return res.status(400).json('Request body no include all columns');
    }
    const { id } = req.params;

    Profile.findById(id).then((userProfile) => {
      if (!userProfile) {
        res.status(404).json({ message: `UserProfile with id ${req.params.id} not found.` });
      }
      userProfile.update(req.body).then(() => {
        res.status(200).json({ message: 'UserProfile updated successfully.' });
      });
    });
  },

  remove(req, res) {
    const { id } = req.params; //
    Profile.findById(id)
      .then((element) => {
        if (!element) {
          return res.status(404).json({ message: `User not found with id ${id}` });
        }
        return element.destroy()
          .then(() => res.status(200));
      })
      .catch(() => res.status(404).json({ message: `Somthing went wrong with id ${id}` }));
  },
};
