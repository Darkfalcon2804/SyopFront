import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// this generateToken function creates a JWT token for the user
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });

// Registrartion function of user

export const registerUser = async (req, res) => {
    const { FirstName, LastName, email, password, ConfirmPassword } = req.body;
    if (!FirstName || !email || !password || !ConfirmPassword) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }
    if (password !== ConfirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            FirstName,
            LastName,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
            message: "User registered Successfully",
            token: generateToken(user._id),
            user
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error
        });
    }

}

// login function got user

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials. Please check your password!' });
        }

        res.status(200).json({
            success: true,
            message: "User logged in Successfully",
            token: generateToken(user._id),
            user
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error
        });
    }
}

// profile function to get user details

export const profile = async (req, res) => {
    res.json({
        success: true,
        user: req.user
    });
}