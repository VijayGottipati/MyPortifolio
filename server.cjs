const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// File to store visitor count
const VISITOR_COUNT_FILE = 'visitor-count.json';

// Initialize visitor count file if it doesn't exist
if (!fs.existsSync(VISITOR_COUNT_FILE)) {
  fs.writeFileSync(VISITOR_COUNT_FILE, JSON.stringify({ count: 0 }));
}

// Email transporter setup
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Get visitor count
const getVisitorCount = () => {
  try {
    const data = fs.readFileSync(VISITOR_COUNT_FILE, 'utf8');
    return JSON.parse(data).count;
  } catch (error) {
    console.error('Error reading visitor count:', error);
    return 0;
  }
};

// Update visitor count
const updateVisitorCount = (count) => {
  try {
    fs.writeFileSync(VISITOR_COUNT_FILE, JSON.stringify({ count }));
  } catch (error) {
    console.error('Error updating visitor count:', error);
  }
};

// Send email notification
const sendEmailNotification = async (subject, text, html = null) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'vijay.gottipati18@gmail.com',
      subject: subject,
      text: text,
      html: html || text
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Routes

// Get visitor count
app.get('/api/visitor-count', (req, res) => {
  const count = getVisitorCount();
  res.json({ count });
});

// Increment visitor count
app.post('/api/visitor', async (req, res) => {
  try {
    const currentCount = getVisitorCount();
    const newCount = currentCount + 1;
    updateVisitorCount(newCount);

    // Email notification disabled per user request
    // await sendEmailNotification(
    //   'New Visitor to Your Portfolio',
    //   `A new visitor has accessed your portfolio website. Total visitors: ${newCount}`,
    //   `
    //     <h2>New Visitor Notification</h2>
    //     <p>A new visitor has accessed your portfolio website.</p>
    //     <p><strong>Total Visitors:</strong> ${newCount}</p>
    //     <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
    //   `
    // );

    res.json({ count: newCount, success: true });
  } catch (error) {
    console.error('Error incrementing visitor count:', error);
    res.status(500).json({ error: 'Failed to update visitor count' });
  }
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Send email notification
    await sendEmailNotification(
      `Portfolio Contact: ${subject}`,
      `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `
    );

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending contact form:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
