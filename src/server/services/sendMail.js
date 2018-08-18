const { Trip, Profile, sequelize } = require('../models');

const mailModule = require('../mailModule/mailModule');

const { transporter } = mailModule;
const { regConfirmationEmail } = mailModule;

module.exports = {
  sendMail(req) {
    const arr = [];
    Profile.findOne({
      where: {
        userId: req.user.id,
      },
    }).then((profile) => {
      arr.push(profile.email);
    });
    Trip.findOne(
      {
        where: {
          id: req.body.tripId,
        },
      },
    )
      .then((trip) => {
        arr.push(trip.name);
        return Profile.findOne({
          where: {
            id: trip.userId,
          },
        });
      })
      .then((profile) => {
        const message = `<p>User: ${req.user.login} e-mail: ${arr[0]}
                        <br>Subscribed to tour: ${arr[1]}</p>`;

        const confirmation = {
          mail: '',
          subject: 'New subscriber',
          message,
        };
        confirmation.mail = profile.email;
        confirmation.mail = 'kyrylenko.vadym@gmail.com'; // for test
        transporter.sendMail(regConfirmationEmail(confirmation), (error) => {
          if (error) {
            console.log(error.message);
          }
          console.log('Confirmation message sent');
        });
      });
  },

};
