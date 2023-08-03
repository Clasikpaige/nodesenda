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

edit the code in sendemail.js to your prepfared taste

	3.	e. Save the changes in the sendEmail.js file.
f. Initialize a Git repository and make your first commit:

git init
git add package.json package-lock.json sendEmail.js
git commit -m "Initial commit with Nodemailer setup"

	3.	g. Create a new repository on GitHub and follow the instructions to push your local repository to the remote repository:

git remote add origin <repository_url>
git push -u origin master



After following these steps, you’ll have a well-structured Node.js project on GitHub that uses Nodemailer to send emails programmatically. When you execute the sendEmail.js script using Node.js, it will automatically send the email without any prompts, and the result will be logged in the terminal.
