import React, { Fragment } from "react";
import Planet from "./planet"

// Com o Fragment conseguimos fazer "divs" alternativas no nosso código que não são renderizadas na hora de compilar.
// E por que utilizar o Fragment? Pois todo component que você for retornar tem que estar dentro de um Nó.
// E o fragment nos ajuda a conseguir fazer isso sem ter que ficar botando muitas divs em nosso código.

// Criando uma função para ser usada em um botão.

// Vamos criar um método para ser chamado dentro do componentDidMount.
async function getPlanets(){
    let response = await fetch("http://localhost:3000/api/planets.json")
    let data = await response.json()
    return data
}

class Planets extends React.Component {
    // Vamos criar um constructor para a utilização do state

    constructor(props) {
        // Utilizando o super conseguimos passar os props para a classe que estamos herdendo.
        super(props)
        // Criando o state.
        this.state = {
            // Aqui iremos passa as informações dos planetas
            planets: [

            ]

        }
    }

    // Vamos criar um método para fazer o LifeCycle..
    // Sempre que o render for realizado esse método vai ser chamado sempre.
    componentDidMount(){
        getPlanets().then( data =>{
            this.setState(state =>({
                planets: data['planets']
            }))
        })
    }

    // Depois de organizar nossa classe nós podemos fazer algo para alterar o state.
    removeLast = () => {
        // Pegamos a lista de todos planetas
        let new_planets = [...this.state.planets]
        // Subtraímos um dele
        new_planets.pop()
        // Utilizamos o método da própria classe setState para atualizar as informações desta forma:
        this.setState(state =>({
        planets: new_planets  // Escolhemos o que querermos atualizar e botamos as novas informações.
        }))
    }

    duplicateLast = () =>{
        let last_planet = this.state.planets[this.state.planets.length -1]
        this.setState(state =>({
            planets: [...this.state.planets, last_planet]
        }))

    }

    render() {
        return (
            <Fragment>
                <h3>Planet List</h3>
                <button onClick={this.removeLast}>Remover o último planeta.</button>
                <button onClick={this.duplicateLast}>Duplicar o último planeta.</button>
                <hr />
                {this.state.planets.map((p, k) =>
                    <Planet
                        id={p.id}
                        name={p.name}
                        text={p.text}
                        url={p.url}
                        img_url={p.img_url}
                        
                    />
                )}
            </Fragment>
        )
    }

}

export default Planets