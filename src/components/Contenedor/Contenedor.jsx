import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Services from '../../services/Services';
import Swal from 'sweetalert2';
import '../Contenedor/Contenedor.css'



function Contenedor({TareasM, setTareasM, mostrarPendiente, usuarioLogueado, Busqueda}) {
    
    const tareasFiltradas = TareasM
    .filter(t => t.usuario === usuarioLogueado.Nombre)
    .filter(t => mostrarPendiente ? !t.estado : t.estado)
    .filter(t => t.nombre.toLowerCase().includes(Busqueda.toLowerCase()));
    
    
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
  const { value: nuevoContent } = await Swal.fire({
    title: "Editar tarea",
    input: "text",
    inputLabel: "Nuevo nombre de la tarea",
    inputValue: tarea.nombre,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    cancelButtonText: "Cancelar",
    inputValidator: (value) => {
      if (!value.trim()) {
        Swal.fire("Error al guardar", "Ingresa un dato valido.", "error");
      }
    }
  });

  if (nuevoContent) {
    const tareaActualizada = { ...tarea, nombre: nuevoContent };
    await Services.putTask(tareaActualizada, tarea.id);
    setTareasM(TareasM.map(t => t.id === tarea.id ? tareaActualizada : t));
    Swal.fire("¡Listo!", "Tarea actualizada correctamente", "success");
  }
};

//-----------------------------------------------------------------------------------------------------------------
  return (
    <div className='allC'>
        
        <div className='pendientes'>
        <h1> {mostrarPendiente ? "Pendientes:" : "Completadas:"} </h1>

        <div className="lista-tareas">
            {tareasFiltradas.length === 0
            ? <p>No hay tareas disponibles</p>
            : tareasFiltradas.map((tarea) => (

                    <div key={tarea.id} className="tarea-card">
                    
                    <h3 className={tarea.estado ? "tarea-completada" : ""}>
                        {tarea.nombre}
                        <input type="checkbox" checked={tarea.estado} onChange={() => tarea.estado ? activarTarea(tarea) : CompletarTarea(tarea)}/>
                    </h3>
                    <p>{tarea.fecha}</p>
                    {mostrarPendiente 
                        ? (
                            <>
                                <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                                <button onClick={() => editarTarea(tarea)}>Editar</button>
                            </>
                        ) 
                        : null
                    }
                    </div>
            ))}
            
        </div>
        </div>

    </div>
  )
}

export default Contenedor