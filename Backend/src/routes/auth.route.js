import express from 'express';
import { userPostRegister, userPostLogout, userPostLogin } from '../controllers/auth.controller.js';

const router = express.Router();

router.route("/user/register")
    .post(userPostRegister)

router.route("/user/login")
    .post(userPostLogin)

router.post("/user/logout", userPostLogout);

export default router;