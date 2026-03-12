import express from 'express';
import { getAgents } from '../controllers/agentController';



const router = express.Router();

//get all agents
router.get('/agents', getAgents);

export default router;