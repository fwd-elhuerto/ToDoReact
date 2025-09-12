import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Contenedor from '../Contenedor';
import NavBar from '../../NavBar/NavBar';
import Services from '../../../services/Services';

function AdminTask() {

  const [TareasM, setTareasM] = useState([])
  const [mostrarPendiente, setmostrarPendiente] = useState(true);
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado"))


  useEffect(() => {
        const pedirInfo = async () => {
            const datos = await Services.getTask()
            setTareasM(datos) 
        }
       pedirInfo()
   },[])

    const agregarTarea = (tarea) => {
            console.log(tarea);
            
            setTareasM([...TareasM, tarea])
        }

  return (
    <div>

        <NavBar agregarTarea={agregarTarea} mostrarPendiente={mostrarPendiente} setmostrarPendiente={setmostrarPendiente} TareasM={TareasM} usuarioLogueado={usuarioLogueado} />
        <Contenedor TareasM={TareasM} setTareasM={setTareasM} mostrarPendiente={mostrarPendiente} setmostrarPendiente={setmostrarPendiente} usuarioLogueado={usuarioLogueado} />

    </div>
  )
}

export default AdminTask