const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Message = require('../models/Message');

// @route   POST api/contact
// @desc    Send contact email & Save to DB
// @access  Public
router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        // 1. Save to Database first
        const newMessage = new Message({
            name,
            email,
            subject,
            message
        });
        await newMessage.save();

        // 2. Send Email
        // Note: For Gmail, you need to use an App Password if 2FA is enabled.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS  // Your email password or App Password
            }
        });

        const mailOptions = {
            from: `"${name}" <${email}>`, // sender address
            to: process.env.EMAIL_USER, // list of receivers (your email)
            subject: `New Contact Form Submission: ${subject}`, // Subject line
            text: `You have received a new message from your website contact form.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`, // plain text body
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <div style="margin-top: 20px; padding: 15px; background-color: #f4f4f4; border-radius: 5px;">
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                </div>
            ` // html body
        };

        // Attempt to send email, but don't fail the request if email fails (since DB save worked)
        try {
            await transporter.sendMail(mailOptions);
        } catch (emailErr) {
            console.error('Email send failed but saved to DB:', emailErr);
        }

        res.status(200).json({ msg: 'Message sent successfully!' });

    } catch (err) {
        console.error('Contact error:', err);
        res.status(500).json({ msg: 'Server error: ' + err.message });
    }
});

const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// @route   GET api/contact
// @desc    Get all messages (for Admin Dashboard)
// @access  Private (Admin Only)
router.get('/', [auth, admin], async (req, res) => {
    try {
        const messages = await Message.find().sort({ date: -1 });
        res.json(messages);
    } catch (err) {
        console.error('Error fetching messages:', err.message);
        res.status(500).json({ msg: 'Server Error: ' + err.message });
    }
});

module.exports = router;
