
import { Route, Routes } from 'react-router'
import './App.css'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import AgentDashboard from './pages/AgentDashboard'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/agent/dashboard" element={<AgentDashboard/>} />
      <Route path="*" element={<HomePage />} />
    </Routes>

    </>
  )
}

export default App
