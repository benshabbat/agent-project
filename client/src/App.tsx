
import { Route, Routes } from 'react-router'
import './App.css'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>

    </>
  )
}

export default App
