import {React, Fragment, useState} from "react";

const Form = (p) =>{

    const initialState = {
        name: ''
    }

    const [fields, setFields] = useState(initialState)

    const handleChange = (event) =>{
        setFields({
            ...fields,
            [event.currentTarget.name]: event.currentTarget.value
        }
        )
    }

    const handleSubmit = (event) =>{
        p.addSatellite(fields)
        event.preventDefault()
        console.log(fields)
        setFields(initialState)
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <label htmlFor='satellite'>Adicionar Satélite:</label>
                <input id='name' name='name' type='text' onChange={handleChange} value={fields.name}></input>
                <br/>
                <input type='submit'></input>
            </form>
        </Fragment>
    )
  
}

export default Form