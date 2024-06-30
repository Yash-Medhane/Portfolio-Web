const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
    return;
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all required fields.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'softwareengineer612@gmail.com',
      pass: 'vygk iryb tnmb jaln'
    }
  });

  const mailOptions = {
    from: 'softwareengineer612@gmail.com',
    to: 'softwareengineer612@gmail.com',
    subject: 'Website Contact',
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email: ' + error.toString() });
  }
};
