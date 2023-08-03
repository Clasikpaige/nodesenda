const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_email_password',
  },
});

const mailOptions = {
  from: 'your_email@gmail.com',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'This is a test email sent using Nodemailer!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error.message);
  } else {
    console.log('Email sent:', info.response);
  }
});
