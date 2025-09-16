import React from 'react'
import Header from '../components/Header/Header'
import AdminTask from '../components/Contenedor/AdminTask/AdminTask'
import Footer from '../components/Footer/Footer'
import  '../pages/Pages.css'

function Gestor() {
  return (
    
    <div className="page-container">
      <div className="page-main">
        <Header />
        <AdminTask />
      </div>

      <Footer className="page-footer" />
    </div>

  )
}

export default Gestor