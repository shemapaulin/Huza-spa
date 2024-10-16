import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT =  3000;

const corsOptions = {
  origin: ['https://huza-spa.vercel.app', 'http://127.0.0.1:5173'], 
  methods: ['GET', 'POST'],                                       
  allowedHeaders: ['Content-Type'],                               
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));  
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: 'huzagateway@gmail.com',
    pass: 'jcuy fuqj crlj emor', 
  },
  tls: {
    rejectUnauthorized: false, 
  },
});

// Email sending endpoint
app.post('/sendBooking', async (req, res) => {
  const { email, bookingDetails,name } = req.body;

  const mailOptions = {
    from: email, 
    to: "huzagateway@gmail.com", 
    subject: `Booking for ${name} `,
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
