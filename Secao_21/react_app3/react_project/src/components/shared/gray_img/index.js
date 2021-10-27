import './style.css'

// Criamos a pasta shared para colocarmos uma tag que ira ser reutilizada em algum local.
// Vamos passar uma props com um link para ser usada como link de imagem
const GrayImage = (props) =>{
    return(
        // Podemos utilizar "?" para a renderização condicional.
        <img className={props.gray ? 'gray-img':'color-img'} src={props.img_url} alt='Your browser does not support images.'></img>
        // Então no documento iremos fazer assim: <GrayImage img_url="URL"/>
        // Assim nosso component fica reutilizável
    )
}

export default GrayImage
// Iremos exportar essa imagem para reutilizar em vários outros casos.