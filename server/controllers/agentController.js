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
