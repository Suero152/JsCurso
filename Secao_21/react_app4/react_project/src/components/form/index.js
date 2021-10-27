import {React, Fragment, useState} from "react";

const Form = (props) =>{

    // Criando a forma padrão do state
    const initialState = {
        name: '',
        description: '',
        img_url: '',
        url: ''
    }

    // Montando um state para colocar múltiplos forms.
    const [fields, setFields] = useState(initialState)

    // Fazendo um evento para alterar o valor dos Input e dos State.
    const handleChange = event=>{
        setFields({
            ...fields,
            // Aqui estamos criando um handleChange genérico que serve para qualque input.
            // Fazendo um overide no nosso objeto padrão.
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    const handleSubmit = event=>{
        // Adicionando o novo Objeto JavaScript.
        props.addPlanet(fields)
        event.preventDefault()
        setFields(initialState)
    }

    // Agora é só conectar os métodos com as tags
    return(
        <Fragment>
            <form onSubmit={handleSubmit}> 
                <div>
                <label htmlFor="name">Nome: </label>
                <input id="name" name="name" type="text" onChange={handleChange} value={fields.name} ></input>
                <br/>
                <label htmlFor="description">Descrição: </label>
                <input id="description" name="description" type="text" onChange={handleChange} value={fields.description} ></input>
                <br/>
                <label htmlFor="img">Imagem ilustrativa: </label>
                <input id="img" name="img_url" type="text" onChange={handleChange} value={fields.img_url} ></input>
                <br/>
                <label htmlFor="source">Link de Fonte: </label>
                <input id="source" name="url" type="text" onChange={handleChange} value={fields.url} ></input>
                </div>
                <input type='submit' value="Enviar"></input>
                <br/>
            </form>
        </Fragment>
    )
}

export default Form