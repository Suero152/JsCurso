import GrayImage from "../../shared/gray_img"
import DescriptionWithLink from "../../shared/description_with_link"
import React from "react";
import {Link} from "react-router-dom"
// Importamos o link para fazer uma navegação sem reloads.


const Planet = (props) =>{

    let title;
    // Agora vamos adicionar o Link ao título, para que seja um meio para essa rota.
    if (props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>
    return (
        // No atributo on click devemos colocar uma função anônima que chama a função desejada.
        // Isso evita com que o React pense que você quer chamar a função naquela hora.
        <div className='container'>
            <Link to={`/planet/${props.id}`}>{title}</Link>
            <DescriptionWithLink description={props.description} url={props.url} />
            <GrayImage img_url={props.img_url} />
            <hr />
        </div>
    )
    
}


export default Planet