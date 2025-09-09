import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Services from '../../services/Services';
import '../NavBar/NavBar.css'
import Swal from 'sweetalert2';

function NavBar() {
const [Busqueda, setBusqueda]=useState("");
const [NuevaT, setNuevaT]=useState("");


const agregarTarea = async () => {
     const fechaActual = new Date();

    if (NuevaT.trim()) {
        const task ={
        nombre: NuevaT,
        estado: false,
        fecha: fechaActual.toLocaleString()
        }
        const tareaGuardada =await Services.postTask(task)
        console.log(tareaGuardada);
        setNuevaT("");
        Swal.fire("¡Listo!", "Tarea agregada.", "success");
    }
    

}





  return (
    <div>
    
    <div className='busqueda'>
        <input type="text" value={Busqueda} placeholder='Filtrar por nombre' onChange={(e)=> setBusqueda(e.target.value)} />
        <button /* onClick={buscar} */>Buscar</button><br /><br />
    </div>
        <label htmlFor="nueva">Agregar Pendiente</label>
        <input type="text" placeholder='Nueva tarea' value={NuevaT} onChange={(e)=> setNuevaT(e.target.value)}/>
        <button onClick={agregarTarea} >Agregar</button><br />
        <button /* onClick={} */ className='completadas'>Tareas completadas</button>


    </div>
  )
}

export default NavBar