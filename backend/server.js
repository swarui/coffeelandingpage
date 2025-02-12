const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to handle the contact form
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  // Create the email transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can change to any email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: email, // Sender address (from form)
    to: process.env.EMAIL_USER, // Receiver address
    subject: `Contact Form Message from ${firstName}`,
    text: `You have a new message from ${firstName} ${lastName ? lastName : ""} (${email}):\n\nMessage: ${message}`,
};

  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
      return res.status(500).send("Failed to send email.");
    }
    console.log("Email sent:", info.response);
    res.status(200).send("Message sent successfully!");
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
