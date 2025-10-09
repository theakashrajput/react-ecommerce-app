import express from 'express';
import { userAuthMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', userAuthMiddleware, (req, res) => {
    res.status(200).json({
        message: "Welcome to the Home page",
        user: {
            username: req.user.username,
            email: req.user.email,
            id: req.user._id
        }
    })
});

export default router;