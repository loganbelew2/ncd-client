
import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";
// Make sure to include your environment variables
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;
const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_PASSWORD;
const receivingEmail = process.env.RECEIVING_EMAIL;
export async function POST(request: Request) {
  const { name, email, phone, subject, message } = await request.json();
  // Basic validation
  if (!name || !email || !phone || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }
  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: true, // Use true for port 465, false for others
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });
  // Email options
  const mailOptions = {
    from: receivingEmail, // Your sending email
    to: receivingEmail, // Where the email is sent
    subject: `Contact Form Submission: ${subject}`,
    text: `You received a message from ${name} (${email} / ${phone}):\n\n${message}`,
  };
  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({"host": smtpHost, "port": smtpPort, "user": emailUser, "pass": emailPassword, "receivingEmail": receivingEmail});
  }
}