import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: "Email and message are required" });
  }

  try {
    // Create a transporter using SMTP (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.GMAIL_PASS, // app password if 2FA is on
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER, // where you want to receive emails
      subject: `New message from ${email}`,
      text: message,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to send email" });
  }
}