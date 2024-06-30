const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: 'http://localhost:3000', 
  methods: 'POST',
  allowedHeaders: 'Content-Type'
}));
app.use(bodyParser.json());

app.post('/send', async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'softwareengineer612@gmail.com',
      pass: 'vygk iryb tnmb jaln'
    }
  });

  // Configure the email details
  const mailOptions = {
    from: 'softwareengineer612@gmail.com', 
    to: 'softwareengineer612@gmail.com',
    subject: 'Website Contact',
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email: ' + error.toString());
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
