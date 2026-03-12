import express from 'express';
import { register ,login} from '../controllers/authController.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

//register a new agent
router.post('/register', verifyToken, register);
router.post('/login', login);

export default router;