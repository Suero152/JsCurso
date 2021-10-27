import GrayImage from "../shared/gray_img";
import DescriptionWithLink from "../shared/description_with_link";
import React, {useState, useEffect} from "react";
import Form from "./form/satellite.js";
import { Link, useParams} from 'react-router-dom'
import NotFound from "../../screens/not_found";

async function getPlanet(planetId){
    const response = await fetch(`http://localhost:3000/api/${planetId}.json`)
    const data = await response.json()
    return data
}

const Planet = () =>{

    // Fazendo a variável armazenadora dos sátelites e o método que setta eles.
    const [satellites, setSatellites] = useState([

    ])
    const [planet, setPlanet] = useState({

    })

    // Fazendo uma URL genérica.
    // Utilizando o useParams desta forma conseguimos resgatar apenas o valor ID.
    let {id} = useParams() // Quando conseguimos resgatar esse valor ID da url, podemos utiliza-lo no resto de nosso projeto.


    const addSatellite = (new_satellite) =>{
        setSatellites([...satellites, new_satellite])
    }

    const [redirect, setRedirect] = useState(false)

    // Utilizando o useEffect para que toda vez que a página é montada ele ser acionado.
    useEffect(() =>{
        getPlanet(id).then(data =>{
          setSatellites(data['satellites'])
          setPlanet(data['data'])
    }, error=>{
        setRedirect(true)
        
    })
    // Utilizando macete para ele só atualizar na montagem da página e não em qualquer alteração do State.
    // Esse argumento que contém um Array é para indicar o que precisa ser alterado pra ele o useEffect ser efetuado.
    }, [id])


    if(redirect){
        return <NotFound/>
    }
    let title;
    if (planet.title_with_underline)
        title = <h4><u>{planet.name}</u></h4>
    else
        title = <h4>{planet.name}</h4>
    return (
        // No atributo on click devemos colocar uma função anônima que chama a função desejada.
        // Isso evita com que o React pense que você quer chamar a função naquela hora.
        <div className='container'>
            <Link to=""><button>Voltar</button></Link>
            <hr/>
            {title}
            <DescriptionWithLink description={planet.description} url={planet.url} />
            <GrayImage img_url={planet.img_url} />
            <h4>Satélites</h4>
            <ul>
            {
                // No react devemos fornecer uma key para cada Child diferente dentro de uma UL.
                // Para botarmos essa key apenas utilizei o segundo parâmetro do map que fornece o index.
                satellites.map((sat, key)=>{
                    return <li key={key}>{sat.name}</li>
                })
            }
            </ul>
            <Form addSatellite={addSatellite}/>
            <hr />
        </div>
    )
    
}


export default Planet