import { useEffect } from "react";
import { useNavigate } from "react-router";
import {useAuthStore} from "../store/useAuthStore";

function HomePage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/");
  }, [])
  const {agentState,getAgent} = useAuthStore()
  const getAgentByClick=async()=>{
    await getAgent(agentState?.id)
  }

  if(agentState?.role === "agent")
  {
    navigate("/agent/dashboard")
  }


  return <div>
    <button onClick={getAgentByClick}>Get Agent</button>
  </div>;
}

export default HomePage;
