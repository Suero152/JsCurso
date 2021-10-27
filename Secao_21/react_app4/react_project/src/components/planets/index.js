import Planet from "./planet"
import React, { Fragment, useState, useEffect } from "react";
import Form from "../form";
// Vamos importar o necessário para utilizar o State dentro de uma função


async function getPlanets() {
    let response = await fetch("http://localhost:3000/api/planets.json")
    let data = await response.json()
    return data
}
// Criando uma função anônima para render e então utilizarmos o State funcionalmente.
const Planets = () => {

    // Declarando os estados
    // Aqui nos declaramos onde esses valores vão ficar e como vamos settar esses valores respectivamente.
    const [planets, setPlanets] = useState([
        // Aqui serão os valores do State.

    ])

    // Adicionando um Form Controlado
    const addPlanet = (new_planet) =>{
        setPlanets([...planets, new_planet])
    }

    // Utilizando o hook useEffect para refatorar o lifecycle
    useEffect(()=>{
        getPlanets().then( data =>{
            setPlanets(data['planets'])
        })
    // Para que ele seja chamado apenas na montagem da página vamos fazer o seguinte:
    // Esse argumento que contém um Array é para indicar o que precisa ser alterado pra ele o useEffect ser efetuado.
    // Se não passarmos nada ele só é executado na montagem da página.
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