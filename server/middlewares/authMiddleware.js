import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.SESSION_TOKEN; // or req.headers.authorization

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // attach decoded user info to req.user
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};
