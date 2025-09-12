import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Gestor from '../pages/Gestor'
import Register from '../pages/Register'
import Login from '../pages/Login'

const Routing =() => {
  return (
    <Router>
      <Routes>
        <Route path='/Gestor' element={<Gestor/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Login' element={<Login/>} />
      </Routes>
    </Router>


  )
}

export default Routing