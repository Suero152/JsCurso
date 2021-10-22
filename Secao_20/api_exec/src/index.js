import 'core-js'
import 'regenerator-runtime/runtime'
import { getSentryObjects } from './api_result'
import SentryObject from './sentry'


async function loadSentryObjects(){
    const sentryObjectsJSON = await getSentryObjects()
    const sentryObjects = []
    
    sentryObjectsJSON.forEach((sentryObject)=>{
        const newSentryObject = new SentryObject(sentryObject['sentryId'], sentryObject['fullname'], sentryObject['year_range_min'], sentryObject['year_range_max'])
        sentryObjects.push(newSentryObject)
    })
    console.log(sentryObjects)
    console.log(sentryObjectsJSON)
    renderSentryObjects(sentryObjects)
}

function renderSentryObjects(sentryObjects){
    const ulElement = document.getElementById('sentry-objects-ul')
    sentryObjects.forEach((sentryObject) =>{
        const liElement = document.createElement('li')
        const text = `ID: ${sentryObject.id} | Nome: ${sentryObject.name} | Minímo de anos para impacto: ${sentryObject.minYearsForCollision} | Máximo de anos para impacto: ${sentryObject.maxYearsForCollision}`
        liElement.innerText = text
        ulElement.appendChild(liElement)
    })
}

loadSentryObjects()