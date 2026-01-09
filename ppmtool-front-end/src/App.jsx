import './App.css'
import { Header } from './components/Layout/Header'
import { Dashboard } from './components/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AddProject } from './components/Project/AddProject'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route exact path="/addProject" element={<AddProject />} />
      </Routes>
    </Router>
  )
}

export default App
