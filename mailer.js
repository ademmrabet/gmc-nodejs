const nodemailer = require('nodemailer');

// Create a transporter using SMTP settings
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Replace with your SMTP provider's hostname
  port: 465, // Replace with your SMTP provider's port
  secure: true, // Use SSL
  auth: {
    user: 'youaredead446@gmail.com', // Replace with your email address
    pass: 'when you test badel enty zeda' // Replace with your email password
  }
});

// Define the email message
const mailOptions = {
  from: 'youaredead446@gmail.com', // Replace with your email address
  to: 'adem.mrabet99@gmail.com', // Replace with recipient's email address
  subject: 'Test Email', // Replace with email subject
  text: 'This is a test email sent from Node.js using nodemailer.' // Replace with email body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});