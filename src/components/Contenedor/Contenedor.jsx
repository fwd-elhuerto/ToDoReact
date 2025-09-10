import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Services from '../../services/Services';
import Swal from 'sweetalert2';



function Contenedor() {
    const [TareasM, setTareasM] = useState([])
    
    useEffect(() => {

      const fecthTareas = async () =>{

        try {
          const tareasObtenidas = await Services.getTask()
          setTareasM(tareasObtenidas)

        } catch (error) {
          console.error("Error al traer las tareas del servicio", error)
        }}
      
      fecthTareas()  
      


      },[])

    const CompletarTarea = async (tarea) =>{
        const tareaActualizada = { ...tarea, estado: true }
        await Services.putTask(tareaActualizada, tarea.id)
        setTareasM(TareasM.map(t => t.id === tarea.id ? tareaActualizada : t))
        Swal.fire("Tarea completada!", "Puedes volverla a activar en el historial de completadas.", "success");
        console.log(TareasM);
    }

    const activarTarea = async (tarea) => {
        const tareaActualizada = { ...tarea, estado: false }
        await Services.putTask(tareaActualizada, tarea.id)
        setTareasM(TareasM.map(t => t.id === tarea.id ? tareaActualizada : t))
    }

    const eliminarTarea = async (id) => {
        const result = await Swal.fire({
        title: "¿Seguro?",
        text: "Esta acción no se puede deshacer",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
        });
        
        if (result.isConfirmed) {
            await Services.deleteTask(id)
            setTareasM(TareasM.filter((t) => t.id !== id))
        }
      }


      const editarTarea = async (tarea) => {
        const nuevoContent = prompt("Digita el nuevo valor", TareasM.nombre)
        if (nuevoContent.trim() !== "") {
            const tareaActualizada = { ...tarea, nombre: nuevoContent }
            await Services.putTask(tareaActualizada, tarea.id)
            setTareasM(TareasM.map(t => t.id === tarea.id ? tareaActualizada : t))
        }
      }


//-----------------------------------------------------------------------------------------------------------------
  return (
    <div>
        
        <h1>Pendientes:</h1>

        <div className="lista-tareas">
            {TareasM.filter(t => !t.estado).map((tarea) => (

                    <div key={tarea.id} className="tarea-card">
                    <h3>{tarea.nombre} <input type="checkbox" onClick={() => CompletarTarea(tarea)}/></h3>
                    <p>{tarea.fecha}</p>
                    <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                    <button onClick={() => editarTarea(tarea)}>Editar</button>
                    </div>
            ))}
            
        </div>


        <h1>Completadas:</h1>

        <div className="lista-tareas">
            {TareasM.filter(t => t.estado).map((tarea) => (
            <div key={tarea.id} className="tarea-card">
            <h3>{tarea.nombre} <input type="checkbox" defaultChecked={true} onClick={() => activarTarea(tarea)}/></h3>
            <p>{tarea.fecha}</p>
            </div>
            ))}
        </div>

    </div>
  )
}

export default Contenedor