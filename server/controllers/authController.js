import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../models/userModel.js'

const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword } = req.body;

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const existingUser = await UserModel.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ success: false, message: 'Passwords do not match' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        await newUser.save();

        const token = jwt.sign(
            { userId: newUser._id, firstName: newUser.firstName, lastName: newUser.lastName },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.cookie('SESSION_TOKEN', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'Strict',
            maxAge: 3600000
        });

        res.status(201).json({
            success: true,
            message: 'User registered successfully'
        });

    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const existingUser = await UserModel.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ success: false, message: 'Invalid Credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        // In a real application, you would also generate a JWT token here
        const token = jwt.sign({ userId: existingUser._id, firstName: existingUser.firstName, lastName: existingUser.lastName }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // And send it back to the client, e.g., res.cookie('token', token, { httpOnly: true });
        res.cookie('SESSION_TOKEN', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'Strict', // Adjust sameSite policy based on environment
            maxAge: 3600000 // 1 hour
        });

        // For demonstration, we will just return a success message
        res.status(201).json({
            success: true,
            message: 'User logged in successfully',
        });

    } catch (error) {
        console.error('Error during user login:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

const logoutUser = async (req, res) => {
    try {
        res.clearCookie('SESSION_TOKEN', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'Strict', // Adjust sameSite policy based on environment
        });

        res.status(200).json({ success: true, message: 'User logged out successfully' });
    } catch (error) {
        console.error('Error during user logout:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

const user = async (req, res) => {
    try {
        const token = req.cookies.SESSION_TOKEN;
        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded.userId).select('-password -lists'); // Exclude password and lists from response

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({ success: true, user });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

export { registerUser, loginUser, logoutUser, user };
