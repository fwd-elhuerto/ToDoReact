import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import '../Header/Header.css'
import Swal from 'sweetalert2';

function Header() {
  const navegar = useNavigate();


  const cerrar = async () => {
    const result = await Swal.fire({
            title: "¿Seguro?",
            text: "¿Volver a inicio de sesión?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, salir",
            cancelButtonText: "Cancelar"
            });
     if (result.isConfirmed) {
             navegar("/Login")   
            }

     
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