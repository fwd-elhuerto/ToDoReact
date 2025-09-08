async function getMovie () {
    
    try {
        
        const response =await fetch("http://localhost:3001/movies",{
        method:'GET',
        headers : {
            'Content-Type': 'application/json'
        }
        })
        const movies = await response.json()
        
        return movies

    } catch (error) {
        console.error("Error al obtener las peliculas",error)
        throw error
    }
}
export{getMovie}



async function postMovie (movie) {
    
    try {
        
        const response =await fetch("http://localhost:3001/movies",{
        method:'POST',
        headers : {
            'Content-Type': 'application/json' },
        body:JSON.stringify(movie)
        })
        const movies = await response.json()
        
        return movies

    } catch (error) {
        console.error("Error al guardar las peliculas",error)
        throw error
    }
}
export{postMovie}


async function deleteMovie (id) {
    
    try {
        
        const response =await fetch("http://localhost:3001/movies/"+ id,{
        method:'DELETE',
        headers : {
            'Content-Type': 'application/json'
        },
        })
        /* const products = await response.json()
        
        return products
 */
    } catch (error) {
        console.error("Error al eliminar las peliculas",error)
        throw error
    }
}
export{deleteMovie}

async function putMovie (movie,id) {
    
    try {
        
        const response =await fetch("http://localhost:3001/movies/"+ id,{
        method:'PUT',
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(movie)
        })
        
    } catch (error) {
        console.error("Error al actualizar las peliculas",error)
        throw error
    }
}
export{putMovie}