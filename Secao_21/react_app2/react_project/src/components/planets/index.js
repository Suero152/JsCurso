import { Fragment } from "react"
import Planet from "./planet"

// Com o Fragment conseguimos fazer "divs" alternativas no nosso código que não são renderizadas na hora de compilar.
// E por que utilizar o Fragment? Pois todo component que você for retornar tem que estar dentro de um Nó.
// E o fragment nos ajuda a conseguir fazer isso sem ter que ficar botando muitas divs em nosso código.

// Criando uma função para ser usada em um botão.
const clickOnPlanet = (name) =>{
    console.log("Você clicou em um planeta chamado:", name)
}


const Planets = () =>{
    return(
        <Fragment>
            <h3>Planet List</h3>
            <button>Botão</button>
            <hr/>
            <Planet name="Mercúrio" text="Lorem Ipsum" url="https://pt.wikipedia.org/wiki/Plut%C3%A3o" img_url="https://imgr.search.brave.com/m9SQJ2L3gQiEAfkkFV1JrSzufHONbxzlWCjVFLlUxiE/fit/1200/1200/ce/1/aHR0cHM6Ly93d3cu/aW5mb2VzY29sYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MDgvMDQvcGxhbmV0/YS1tZXJjJUMzJUJB/cmlvXzYwNTg0MDY4/LmpwZw"
            ClickOnPlanet={clickOnPlanet} title_with_underline="true" gray={true}/>
            <Planet name="Plutão" text="Dolor Sit Amet" img_url="https://imgr.search.brave.com/JikbFlWi4axa11y7uZ3A7LODT8LC3VDLJURmRmKJeNg/fit/1200/675/ce/1/aHR0cHM6Ly9pbWcu/b2xoYXJkaWdpdGFs/LmNvbS5ici91cGxv/YWRzL2FjZXJ2b19p/bWFnZW5zLzIwMTkv/MDgvcjE2eDkvMjAx/OTA4MjkwNTI3Mzhf/MTIwMF82NzVfLV9w/bHV0YW8uanBn" 
            ClickOnPlanet={clickOnPlanet}/>
        </Fragment>
    )
}

export default Planets