import Agent from "../models/Agent.js";


//get all agents
export const getAgents = async (req, res) => {
  try {
    const agents = await Agent.find();
    res.status(200).json(agents);
  } catch (error) {
    res
    .status(500)
    .json({ message: "Error fetching agents", error: error.message });
  } finally {
    console.log("getAgents function executed");
  }
};


export const getAgentById = async (req,res) =>{
  try {
    const {id} = req.params;
    const agent = await Agent.findById(id);
    const {_id,role,fullName,agentCode} = agent
    res.status(200).json(
      {id:_id,role,fullName,agentCode}
    );
  } catch (error) {
    res
    .status(500)
    .json({ message: "Error fetching agent", error: error.message });
    } finally {
    console.log("getAgent function executed");
    }
}
