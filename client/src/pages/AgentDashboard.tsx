

function AgentDashboard() {

  const {user}=useAuthStore()
  return (
    <div>
      <h2>{user.agentCode}</h2>
      <p>{user.fullName}</p>
      <p>{user.role}</p>
    </div>
  )
}

export default AgentDashboard
