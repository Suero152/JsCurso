const DescriptionWithLink = (props) =>{

    // Se não houver descrição vamos abortar a renderização.
    // Se não houver descrição
    if (!props.description){
        return null
    }
    // Vamos fazer com que caso não tenha link presente iremos mostrar apenas a descrição.
    if(props.url){
        return(
            <p>{props.description} | <a href={props.url} target="blank">Link.</a></p>
        )
    }else{
        return(
            <p>{props.description}</p>
        )
    }

}

export default DescriptionWithLink
