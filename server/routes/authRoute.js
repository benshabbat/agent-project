import express from 'express';
import { register } from '../controllers/authController.js';

const router = express.Router();

//register a new agent
router.post('/register', register);

export default router;