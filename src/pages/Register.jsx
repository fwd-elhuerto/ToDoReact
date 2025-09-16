import React from 'react'
import FormRegister from '../components/FormRegister/FormRegister'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function Register() {
  return (
    <div className="page-container">
      <div className="page-main">
        <Header />
        <FormRegister />
        
      </div>

      <Footer className="page-footer" />
    </div>
  )
}

export default Register