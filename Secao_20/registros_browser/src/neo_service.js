// Iremos exportar uma função async para requisitar a API da Nasa.
export async function getNeos(){
    try{
    const response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
    // Estamos transformando o objeto promise retornado pelo response em uma objeto JSON
    const result = await response.json()
    return(result["near_earth_objects"])
    }catch(error){
        return Promise.reject(error)
    }
}