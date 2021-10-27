import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () =>{

    return(
        <div className="not-found-container">
            <h4>
            Ops!
            </h4>
            <p>A página que você procura não existe.</p>
            <Link to=""><button>Home</button></Link>
        </div>
    )

}

export default NotFound