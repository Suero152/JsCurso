import Planet from "./planet"
import React, { Fragment, useState, useEffect } from "react";
import Form from "../planet/form";



async function getPlanets() {
    let response = await fetch("http://localhost:3000/api/planets.json")
    let data = await response.json()
    return data
}

const Planets = () => {

    const [planets, setPlanets] = useState([
    ])

    const addPlanet = (new_planet) =>{
        setPlanets([...planets, new_planet])
    }


 

    useEffect(()=>{
        getPlanets().then( data =>{
            setPlanets(data['planets'])
        }) // Aqui podemos fazer ele rodar um redirect quando algo dá errado.
    }, [])


    const removeLast = () => {
        let new_planets = [...planets]
        new_planets.pop()
        setPlanets(new_planets)
    }

    const duplicateLast = () => {
        let last_planet = planets[planets.length - 1]
        setPlanets([...planets, last_planet])
    }

    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr/>
            <Form addPlanet={addPlanet}/>
            <button id='remove' onClick={removeLast}>Remover o último planeta.</button>
            <button id='duplicate' onClick={duplicateLast}>Duplicar o último planeta.</button>
            <hr />
            {planets.map((p, k) =>
                <Planet
                    key={k}
                    id={p.id}
                    name={p.name}
                    description={p.description}
                    url={p.url}
                    img_url={p.img_url}

                />
            )}
        </Fragment>
    )


}

export default Planets