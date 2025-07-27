import express from "express";
import nodemailer from "nodemailer";
import contactForm from "../models/contactForm.model.js";

export const contactFormHandler = async (req, res) => {
    const { name, email, phone, subject, category, message, urgency } = req.body;
    try {
        const contact = await new contactForm({
            userId: req.user.id,
            userEmail: req.user.email,
            name,
            email,
            phone,
            subject,
            category,
            message,
            urgency
        });
        await contact.save();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD
            }
        });
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            subject: `New contact form submission: ${subject}`,
            text: `
                You have a new contact form submission:
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Subject: ${subject}
                Category: ${category}
                Message: ${message}
                Urgency: ${urgency}
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(201).json({
            message: 'Contact form submitted successfully',
            contact
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error:error.message
        });

    }
}