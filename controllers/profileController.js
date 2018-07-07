const { Profile } = require('../models');

module.exports = {
  read(req, res) {
    const { id } = req.params;
    Profile.findById(id)
      .then((profile) => {
        if (!profile) {
          return res.status(404).json({ message: `User not found with id ${id}` });
        }
        return res.status(200).json(profile);
      })
      .catch(error => res.status(404).json({ message: `Something went wrong with id ${id}, ${error}` }));
  },

  // check id if not number if has this id
  create(req, res) {
    Profile.create(req.body)
      .then(profile => res.status(201).location(`/${profile.id}/profile`))
      .catch(error => res.status(404).json({ message: `Not found ${error}` }));
  },

  update(req, res) {
    if (!req.body) {
      return res.status(400).json('No request body');
    }
    if (!(req.body.firstName && req.body.lastName && req.body.phoneNumber && req.body.city
            && req.body.country && req.body.birthday && req.body.gender && req.body.photo
            && req.body.about)) {
      return res.status(400).json({ message: 'Request body not includes all columns' });
    }
    const { id } = req.params;
    Profile.findById(id).then((profile) => {
      if (!profile) {
        return res.status(404).json({ message: `UserProfile with id ${req.params.id} not found.` });
      }
      return profile.update(req.body)
        .then(() => res.status(200).json({ message: 'UserProfile updated successfully.' }));
    })
      .catch(error => res.status(404).json({ message: `Something went wrong with id ${id}, ${error}` }));
  },

  remove(req, res) {
    const { id } = req.params;
    Profile.findById(id)
      .then((profile) => {
        if (!profile) {
          return res.status(404).json({ message: `User not found with id ${id}` });
        }
        return profile.destroy()
          .then(() => res.status(200).json({ message: `${id} deleted` }));
      })
      .catch(error => res.status(404).json({ message: `Something went wrong with id ${id}, ${error}` }));
  },
};
