const express = require("express");
const bodyParser = require("body-parser");
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const mailgun = new Mailgun(formData);
const mailgunClient = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
  url: "https://api.mailgun.net",
});

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  const data = {
    from: `Your Site <mailgun@${process.env.MAILGUN_DOMAIN}>`,
    to: "mkaluzny17@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await mailgunClient.messages.create(process.env.MAILGUN_DOMAIN, data);
    res.send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
