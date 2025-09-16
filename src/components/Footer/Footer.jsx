import React, { useState, useRef } from 'react';
import '../Footer/Footer.css';
import Swal from 'sweetalert2';

function Footer() {
  const [showDialog, setShowDialog] = useState(false);
  const dialogRef = useRef(null);

  const abrirDialog = () => {
    setShowDialog(true);
    dialogRef.current.showModal();
  };

  const cerrarDialog = () => {
    dialogRef.current.close();
    setShowDialog(false);
  };

  const contacto = () => {
    Swal.fire(
      "Contacto",
      "Puedes escribirnos a soporte@taskplann.com",
      "info"
    );
  };

  return (
    <div className="footer">
      <div className="footer-content">
        <p>© 2025 TaskPlann</p>
        <p>Organiza tus tareas de manera sencilla y eficiente.</p>
        <button className="btnFooter" onClick={abrirDialog}>
          Términos y condiciones
        </button>
        <button className="btnFooter" onClick={contacto}>
          Contacto
        </button>
      </div>

      <dialog ref={dialogRef} className="modal-footer">
        <h3>Términos y Condiciones</h3>
        <p>
          Bienvenido a TaskPlann. Esta aplicación permite gestionar tus tareas
          de manera personal y privada. Los datos que ingreses se almacenan en
          tu sesión y no se comparten con terceros.
        </p>
        <p>
          Es tu responsabilidad mantener la información segura y no usar la
          plataforma para fines ilegales. El uso de TaskPlann implica la
          aceptación de estos términos.
        </p>
        <button className="btnCerrar" onClick={cerrarDialog}>Cerrar</button>
      </dialog>
    </div>
  );
}

export default Footer;