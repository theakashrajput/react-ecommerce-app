import jwt from 'jsonwebtoken';
import dotenv from '../../config/env.config.js';
import userModel from '../models/user.model.js';

export const userAuthMiddleware = async (req, res, next) => {

    try {
        const { token } = req.cookies;
        
        if (!token) return res.status(409).json({
            message: "Invalid credentials"
        });

        const decoded = jwt.verify(token, dotenv.JWT_SECRET);

        const user = await userModel.findById(decoded.id);

        if (!user) return res.status(409).json({
            message: "Invalid user credentials"
        });

        req.user = user;

        next();
    } catch (err) {
        return res.status(401).json({ message: "Token verification failed", error: err.message });
    }
};