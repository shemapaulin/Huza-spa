import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT =  3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: 'shema.talks@gmail.com',
    pass: 'xhqx lqlv azqw hvpv', 
  },
  tls: {
    rejectUnauthorized: false, 
  },
});

// Email sending endpoint
app.post('/sendBooking', async (req, res) => {
  const { email, bookingDetails } = req.body;

  const mailOptions = {
    from: email, 
    to: "shema.talks@gmail.com", 
    subject: `Booking Confirmation for `,
    text: `Booking Details: ${bookingDetails}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).send('Booking confirmed! A confirmation email has been sent.');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Internal Server Error: Failed to send booking confirmation email.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
