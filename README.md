# nodesenda
nodemailer server for sending emails directly from CLI
Requirements:

	•	Node.js installed on your local machine.
	•	Git installed on your local machine.
	•	A GitHub account to create a new repository.

	3.	Steps:
a. Create a new directory for your project and navigate to it in the terminal:

mkdir my-email-sender
cd my-email-sender

	3.	b. Initialize your project and create the package.json file:

npm init -y

	3.	c. Install Nodemailer as a dependency:

npm install nodemailer

	3.	d. Create the sendEmail.js file in your project directory:

// sendEmail.js
const nodemailer = require('nodemailer');

// Create a transporter with your email service or custom SMTP configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Replace 'Gmail' with your email service or use custom SMTP configuration
  auth: {
    user: 'your_email@gmail.com', // Replace with your email address
    pass: 'your_email_password', // Replace with your email password or use environment variables
  },
});

// Compose the email details
const mailOptions = {
  from: 'your_email@gmail.com', // Replace with your email address
  to: 'recipient@example.com', // Replace with the recipient's email address
  subject: 'Test Email',
  text: 'This is a test email sent using Nodemailer!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error.message);
  } else {
    console.log('Email sent:', info.response);
  }
});

	3.	e. Save the changes in the sendEmail.js file.
f. Initialize a Git repository and make your first commit:

git init
git add package.json package-lock.json sendEmail.js
git commit -m "Initial commit with Nodemailer setup"

	3.	g. Create a new repository on GitHub and follow the instructions to push your local repository to the remote repository:

git remote add origin <repository_url>
git push -u origin master



After following these steps, you’ll have a well-structured Node.js project on GitHub that uses Nodemailer to send emails programmatically. When you execute the sendEmail.js script using Node.js, it will automatically send the email without any prompts, and the result will be logged in the terminal.
