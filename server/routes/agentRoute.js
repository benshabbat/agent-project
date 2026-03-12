import express from 'express';
import { getAgents,getAgentById} from '../controllers/agentController.js';



const router = express.Router();

//get all agents
router.get('/', getAgents);
router.get('/:id', getAgentById);

export default router;