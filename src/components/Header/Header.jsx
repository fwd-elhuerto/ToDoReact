import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../Header/Header.css'
import Swal from 'sweetalert2';

function Header() {
  const navegar = useNavigate();
  const location = useLocation();

  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado"));

  const cerrar = async () => {
    const result = await Swal.fire({
      title: "¿Seguro?",
      text: "¿Volver a inicio de sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, salir",
      cancelButtonText: "Cancelar",
    });
    if (result.isConfirmed) {
      sessionStorage.removeItem("usuarioLogueado");
      navegar("/Login");
    }
  };

  const noMostrarEn =
    location.pathname === "/Login" || location.pathname === "/Register";

  return (
    <div>
      <div className="header">
        <h2>TaskPlann</h2>
        <p>Sencillo, sin atrasos</p>
        {usuarioLogueado && !noMostrarEn && (
          <button className="btnCS" onClick={cerrar}>
            Cerrar sesión
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
