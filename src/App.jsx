import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Project from './Pages/Project'
import Dashboard from './Pages/Dashboard'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister={true} />} />
        <Route path='/project' element={<Project />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App