const DescriptionWithLink = (props) =>{

    // Se não houver descrição vamos abortar a renderização.
    // Se não houver descrição
    if (!props.text){
        return null
    }
    // Vamos fazer com que caso não tenha link presente iremos mostrar apenas a descrição.
    if(props.url){
        return(
            <p>{props.text} | <a href={props.url} target="blank">Link.</a></p>
        )
    }else{
        return(
            <p>{props.text}</p>
        )
    }

}

export default DescriptionWithLink
