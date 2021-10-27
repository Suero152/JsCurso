import GrayImage from "../../shared/gray_img"
import DescriptionWithLink from "../../shared/description_with_link"

// Também podemos utilizar props aqui.
const Planet = (props) => {

    let title;
    if (props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>
    return (
        // No atributo on click devemos colocar uma função anônima que chama a função desejada.
        // Isso evita com que o React pense que você quer chamar a função naquela hora.
        <div onClick={() => props.ClickOnPlanet(props.name)}>
            {title}
            <DescriptionWithLink text={props.text} url={props.url} />
            <GrayImage gray={props.gray} img_url={props.img_url} />
            <h4>Satélites</h4>
            <ul>
            {['a', 'b', 'c', 'd'].map((n) => 
            // Podemos utilizar renderização condicional desta forma:
            <li>Satélite {n}</li>
            )}
            </ul>
            <hr />
        </div>
        // Agora sim nossos components estão totalmente reutilizáveis
    )
}

export default Planet