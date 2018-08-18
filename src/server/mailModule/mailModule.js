const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

module.exports.transporter = nodemailer.createTransport(smtpTransport({
  service: 'Gmail',
  auth: {
    user: process.env.MAIL_GMAIL,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
}));

module.exports.regConfirmationEmail = data => ({
  from: process.env.MAIL_GMAIL,
  to: data.mail,
  cc: '',
  subject: data.subject,
  html: data.message,
  attachments: [],
});
