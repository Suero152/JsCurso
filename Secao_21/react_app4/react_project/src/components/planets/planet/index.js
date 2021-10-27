import GrayImage from "../../shared/gray_img"
import DescriptionWithLink from "../../shared/description_with_link"
import React, {useState, useEffect} from "react";
import Form from "../../form/satellite.js";


async function getSatellites(planetId){
    const response = await fetch(`http://localhost:3000/api/${planetId}.json`)
    const data = await response.json()
    return data
}

// Agora iremos refatorar nossa classe para um componente funcional!

//componentDidMount(){
//    getSatellites(this.props.id).then(data =>{
//        this.setState(state =>({
//            satellites: data['satellites']
//        }))
//    })
//}

const Planet = (props) =>{

    // Fazendo a variável armazenadora dos sátelites e o método que setta eles.
    const [satellites, setSatellites] = useState([

    ])

    const addSatellite = (new_satellite) =>{
        setSatellites([...satellites, new_satellite])
    }


    // Utilizando o useEffect para que toda vez que a página é montada ele ser acionado.
    useEffect(() =>{
        getSatellites(props.id).then(data =>{
          setSatellites(data['satellites'])  
        })
    // Utilizando macete para ele só atualizar na montagem da página e não em qualquer alteração do State.
    // Esse argumento que contém um Array é para indicar o que precisa ser alterado pra ele o useEffect ser efetuado.
    }, [props.id])

    let title;
    if (props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>
    return (
        // No atributo on click devemos colocar uma função anônima que chama a função desejada.
        // Isso evita com que o React pense que você quer chamar a função naquela hora.
        <div className='container'>
            {title}
            <DescriptionWithLink description={props.description} url={props.url} />
            <GrayImage img_url={props.img_url} />
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