import './App.css'
import LandingPage from './pages/LandingPage'
import Policies from './pages/Policies/Policies'
import Payments from './pages/Payments/Payments'

import { Routes, Route, } from 'react-router-dom'

function App() {


  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route
        path='/policies'
        element={<Policies />}
      />
      <Route path='/payments' element={<Payments />}/>
    </Routes>
  )
}

export default App
