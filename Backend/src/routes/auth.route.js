import express from 'express';
import { userLogin, userLogout, userRegister } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/user/register", userRegister);
router.post("/user/login", userLogin);
router.post("/user/logout", userLogout);

export default router;