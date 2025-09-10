import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Services from '../../services/Services';
import '../NavBar/NavBar.css'
import Swal from 'sweetalert2';
import Contenedor from '../Contenedor/Contenedor';


function NavBar({agregarTarea}) {
const [Busqueda, setBusqueda]=useState("");
const [NuevaT, setNuevaT]=useState("");


const agregarTareaPro = async () => {
     const fechaActual = new Date();

    if (NuevaT.trim()) {
        const task ={
        nombre: NuevaT,
        estado: false,
        fecha: fechaActual.toLocaleString()
        }
        console.log(task);
        
       const savedTask = await Services.postTask(task)
        setNuevaT("");
        Swal.fire("¡Listo!", "Tarea agregada.", "success");
        agregarTarea(savedTask)
    }
}

const cambiarLista = () => {

}




//-----------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div>
      <div className='all'>
        <div className='busqueda'>
            <input type="text" value={Busqueda} placeholder='Filtrar por nombre' onChange={(e)=> setBusqueda(e.target.value)} />
            <button /* onClick={buscar} */>Buscar</button><br /><br />
        </div>

            <label htmlFor="nueva">Agregar Pendiente</label>
            <input type="text" placeholder='Nueva tarea' value={NuevaT} onChange={(e)=> setNuevaT(e.target.value)}/>
            <button onClick={agregarTareaPro} >Agregar</button><br />
         <div className='adminTarea'>
            <button onClick={cambiarLista} className='completadas'>Tareas completadas</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar