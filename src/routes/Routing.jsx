import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Gestor from '../pages/Gestor'

const Routing =() => {
  return (
    <Router>
      <Routes>
        <Route path='/Gestor' element={<Gestor/>} />
      </Routes>
    </Router>


  )
}

export default Routing