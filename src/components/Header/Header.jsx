import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import '../Header/Header.css'

function Header() {
  const navegar = useNavigate();
  const cerrar = () => {
     navegar("/Login")
  }


  return (
    <div>

      <div className='header'>
        <h2>TaskPlann</h2>
        <p>Sencillo, sin atrasos</p>
        <button className='btnCS' onClick={cerrar}>Cerrar sesión</button>
      </div>


    </div>
  )
}

export default Header