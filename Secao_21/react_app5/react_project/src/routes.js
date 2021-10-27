import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import PlanetsScreen from './screens/planets'
import PlanetScreen from './screens/planet'
import NotFound from './screens/not_found'

const Routes = () =>{
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={PlanetsScreen}/>
            <Route exact path='/planet/:id' component={PlanetScreen}/> {/* Agora vamos fazer uma 
            abordagem de URL genérica, para que seja gerado uma URL própria para cada planeta.
            Quando botamos ":" + "ID" queremos dizer que isso é um parâmetro para a URL.*/}
            <Route path='*' component={NotFound}/>
            {/* Essa rota significa que qualquer outra rota que o usuário botar que não for uma das
            já listadas anteriores ela irá ser colocada.*/}
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