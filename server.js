const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // serve your frontend HTML

// Gmail transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});


// Email send endpoint
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: `"${name}" <${process.env.GMAIL_USER}>`, // Shows sender name, but from your Gmail
    to: process.env.GMAIL_USER,
    subject: `Message from ${name}`,
    replyTo: email, // This makes the reply go to the sender
    text: `
  You have a new message from your portfolio form:
  
  Name: ${name}
  Email: ${email}
  
  Message:
  ${message}
    `.trim(),
  };
  

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (err) {
    console.error("Error sending mail:", err);
    res.status(500).send("Failed to send email.");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
