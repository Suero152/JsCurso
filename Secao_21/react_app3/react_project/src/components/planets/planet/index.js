import GrayImage from "../../shared/gray_img"
import DescriptionWithLink from "../../shared/description_with_link"
import React from "react";

async function getSatellites(planetId){
    const response = await fetch(`http://localhost:3000/api/${planetId}.json`)
    const data = await response.json()
    console.log(data)
    return data
}

class Planet extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            satellites: [

            ]

        }
    }

    componentDidMount(){
        getSatellites(this.props.id).then(data =>{
            this.setState(state =>({
                satellites: data['satellites']
            }))
        })
    }

    render(){
        let title;
        if (this.props.title_with_underline)
            title = <h4><u>{this.props.name}</u></h4>
        else
            title = <h4>{this.props.name}</h4>
        return (
            // No atributo on click devemos colocar uma função anônima que chama a função desejada.
            // Isso evita com que o React pense que você quer chamar a função naquela hora.
            <div className='container'>
                {title}
                <DescriptionWithLink text={this.props.text} url={this.props.url} />
                <GrayImage img_url={this.props.img_url} />
                <h4>Satélites</h4>
                <ul>
                {
                    // No react devemos fornecer uma key para cada Child diferente dentro de uma UL.
                    // Para botarmos essa key apenas utilizei o segundo parâmetro do map que fornece o index.
                    this.state.satellites.map((sat, key)=>{
                        return <li key={key}>{sat.name}</li>
                    })
                }
                </ul>
                <hr />
            </div>
            // Agora sim nossos components estão totalmente reutilizáveis
        )
    }

}

export default Planet