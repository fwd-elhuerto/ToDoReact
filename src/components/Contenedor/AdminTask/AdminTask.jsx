import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Contenedor from '../Contenedor';
import NavBar from '../../NavBar/NavBar';
import Services from '../../../services/Services';

function AdminTask() {

  const [TareasM, setTareasM] = useState([])

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

        <NavBar agregarTarea={agregarTarea}/>
        <Contenedor TareasM={TareasM} setTareasM={setTareasM}/>

    </div>
  )
}

export default AdminTask