async function getTask () {
    
    try {
        
        const response =await fetch("http://localhost:3001/tareas",{
        method:'GET',
        headers : {
            'Content-Type': 'application/json'
        }
        })
        const tareas = await response.json()
        
        return tareas

    } catch (error) {
        console.error("Error al obtener las tareas",error)
        throw error
    }
}


async function postTask (tarea) {
    
    try {
        
        const response =await fetch("http://localhost:3001/tareas",{
        method:'POST',
        headers : {
            'Content-Type': 'application/json' },
        body:JSON.stringify(tarea)
        })
        const tareas = await response.json()
        
        return tareas

    } catch (error) {
        console.error("Error al guardar las tareas",error)
        throw error
    }
}


async function deleteTask (id) {
    
    try {
        
        const response =await fetch("http://localhost:3001/tareas/"+ id,{
        method:'DELETE',
        headers : {
            'Content-Type': 'application/json'
        },
        })
        /* const products = await response.json()
        
        return products
 */
    } catch (error) {
        console.error("Error al eliminar las tareas",error)
        throw error
    }
}
async function putTask (tarea,id) {
    
    try {
        
        const response =await fetch("http://localhost:3001/tareas/"+ id,{
        method:'PATCH',
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(tarea)
        });
        const tareaActualizada = await response.json();
        return tareaActualizada;
        
    } catch (error) {
        console.error("Error al actualizar las tareas",error)
        throw error
    }
}
export default {getTask, postTask, deleteTask, putTask} 