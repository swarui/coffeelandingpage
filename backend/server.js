const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path"); // Add path module to work with file paths
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

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
    from: email, 
    to: process.env.EMAIL_USER, 
    subject: `Contact Form Message from ${firstName}`,
    html: `<p>You have a new message from <strong>${firstName} ${lastName ? lastName : ""}</strong> (${email}):</p><p><strong>Message:</strong><br>${message}</p>`,
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

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, "build")));  // Add this line to serve your frontend

// Serve index.html for all non-API routes to enable React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});

