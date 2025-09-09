import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

function Header() {
  const navegar = useNavigate();
  const cerrar = () => {
     navegar("/Login")
  }


  return (
    <div>
        <h2>TaskPlann</h2>
        <p>Sencillo, sin atrasos</p>
        <button onClick={cerrar}>Cerrar sesion</button>



    </div>
  )
}

export default Header