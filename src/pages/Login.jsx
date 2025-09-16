import React from 'react'
import FormLogin from '../components/FormLogin/FormLogin'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import  '../pages/Pages.css'

function Login() {
  return (
    
    <div className="page-container">
      <div className="page-main">
        <Header />
        <FormLogin />
        
      </div>

      <Footer className="page-footer" />
    </div>

  )
}

export default Login