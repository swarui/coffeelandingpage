const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000; // Use Render's assigned port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to handle the contact form
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact Form Message from ${firstName}`,
    text: `You have a new message from ${firstName} ${lastName ? lastName : ""} (${email}):\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
      return res.status(500).send("Failed to send email.");
    }
    console.log("Email sent:", info.response);
    res.status(200).send("Message sent successfully!");
  });
});

// Serve frontend from backend
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "client", "dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });
}

// Listen on the assigned port and bind to 0.0.0.0
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
