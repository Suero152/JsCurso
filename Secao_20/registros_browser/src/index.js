import "core-js"
import "regenerator-runtime/runtime"
import Neo from "./neo"
import { getNeos } from "./neo_service"


async function loadNeos() {
    try{
        let neos = []
        let neosJSON = await getNeos()
        neosJSON.forEach(neo => {
            const minDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_min"]
            const maxDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_max"]
            const averageDiameter = (minDiameter + maxDiameter) / 2
            const newNeo = new Neo(neo['id'], neo['name'], averageDiameter, neo['is_sentry_object'])
            neos.push(newNeo)
            renderNeos(neos)
        })
    }catch(error){
        const ulElement = document.getElementById('neos-list')
        ulElement.innerText = "UM ERRO OCORREU, TENTE NOVAMENTE MAIS TARDE."
    }
}

// Agora iremos registrar essas informações dento do Browser.

function renderNeos(neos) {
    const ulElement = document.getElementById('neos-list')
    ulElement.innerText = ''

    neos.forEach((neo) => {
        let liElement = document.createElement("li")
        // Podemos utilizar o "?" para perguntar se aqui é verdadeiro ou falso, podendo retornar algum valor caso
        // Aquilo seja verdadeiro ou falso.
        let isSentry = neo.isSentry ? "Apresenta perigo de colisão." : "Não apresenta perigo de colisão."
        let text = `${neo.id} | ${neo.name} | Diametro medio: ${neo.averageEstimatedDiameter} | ${isSentry}`
        liElement.innerText = text
        ulElement.appendChild(liElement)
    })
}

loadNeos()