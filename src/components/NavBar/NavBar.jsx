import React from 'react'
import { useState, useRef } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Services from '../../services/Services';
import '../NavBar/NavBar.css'
import Swal from 'sweetalert2';



function NavBar({agregarTarea, mostrarPendiente, setmostrarPendiente, TareasM}) {
const [Busqueda, setBusqueda]=useState("");
const [NuevaT, setNuevaT]=useState("");
const timeoutRef = useRef(null);

const enCola = TareasM.filter(t => !t.estado).length;
const terminadas = TareasM.filter(t => t.estado).length;
console.log(terminadas);

  

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
    } else{
        Swal.fire("Error al guardar", "Ingrese un valor valido", "error");
    }
}



const cambiarLista = () => {
   timeoutRef.current =setTimeout(() => {
      document.startViewTransition(() => {
        setmostrarPendiente(!mostrarPendiente);
      });
    }, 300); 
}
const soltarMouse =() => {
  clearTimeout(timeoutRef.current)
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
            <input type="text" placeholder='Nueva tarea' value={NuevaT} 
            onChange={(e)=> setNuevaT(e.target.value)}
            onKeyDown={(e)=>{
              if (e.key === "Enter") {
                agregarTareaPro()
              }
            } }
            />
            <button onClick={agregarTareaPro} >Agregar</button><br />
         <div className='adminTarea'>
            <button onMouseDown={cambiarLista} onMouseUp={soltarMouse} onMouseLeave={soltarMouse} className='completadas'>{mostrarPendiente ? `Tareas completadas ${terminadas}` : `Tareas pendientes ${enCola}`}</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar