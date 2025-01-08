import express from 'express';
import { handleUserSingUp } from '../controller/user';

const router = express.Router();

// 用户注册
router.get('/sign', handleUserSingUp);
// 用户登录
router.get('/login');

export default router;
