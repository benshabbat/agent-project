import { useAuthStore } from "../store/useAuthStore"


function AgentDashboard() {

  const {agentState}=useAuthStore()
  return (
    <div>
      <h2>{agentState?.agentCode}</h2>
      <p>{agentState?.fullName}</p>
      <p>{agentState?.role}</p>
    </div>
  )
}

export default AgentDashboard
