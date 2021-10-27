import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import PlanetsScreen from './screens/planets'

const Routes = () =>{
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={PlanetsScreen}/>
        </Switch>
    </BrowserRouter>
    )
    // Todas as telas que criarmos serão exibidas dentro do BrowserRouter
    // O Switch é um componente que fica em volta de todas as rotas. O Switch é para trocarmos entre as rotas.
    // E o route será onde iremos colocar nossa rota.   
}
// Agora iremos importar essas rotas em nosso app.
// Depois disso podemos notar que ele vai carregar a página de planetas somente se encontrar ela dentro da rota
// '/' que definimos, que no caso seria a rota padrão. ( http://localhost:3000/ )
export default Routes