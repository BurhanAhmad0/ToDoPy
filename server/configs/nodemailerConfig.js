import nodemailer from "nodemailer";

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com", // Use Brevo's SMTP server
  port: 587, // Use the appropriate port for Brevo
  auth: {
    user: process.env.SMTP_USER, // Use your Brevo email here
    pass: process.env.SMTP_PASS, // Use your Brevo API key here
  },
});

export default transporter;
