import userModel from "../models/user.model.js"
import bcrypt from 'bcrypt';
import dotenv from '../../config/env.config.js';
import jwt from 'jsonwebtoken';

export const userRegister = async (req, res) => {

    const { username, email, password } = req.body;

    const isUserExist = await userModel.exists({
        email: email
    });

    if (isUserExist) return res.status(409).json({
        message: "Email address is already exist"
    });

    const user = await userModel.create({
        username, email, password: await bcrypt.hash(password, 10)
    });

    console.log(user);

    const token = jwt.sign({ id: user._id }, dotenv.JWT_SECRET);

    res.cookie('token', token);

    res.status(202).json({
        message: "User register auccessfully",
        user: {
            username: user.username,
            email: user.email,
            id: user._id
        }
    })
};

export const userLogin = async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email: email });

    if (!user || !(await bcrypt.compare(password, user.password))) return res.status(401).json({
        message: "Invalid user credentials"
    });

    const token = jwt.sign({ id: user._id }, dotenv.JWT_SECRET);

    res.cookie("token", token);

    res.status(200).json({
        message: "User logged in successfully"
    })
};

export const userLogout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({
        message: "Use logout successfully"
    });
}
