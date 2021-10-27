import React from 'react'
import './App.css';

// Vamos criar um novo component utilizando uma função.

function Component(){
  return <h1>Hello, World.</h1>;
}

// Também podemos criar utilizando funções anônimas.

const Component2 = () =>{
  return <h2>Hello, World.</h2>;
}

// E podemos utilizar classes também para fazer isso utilizando um extend juntamente do React. 
// ( precisamos fazer o import dele!)

class Component3 extends React.Component{
  render(){
    return <h3>Hello, World.</h3>;
  }
}

// Agora podemos inserir o Component criado como se ele fosse uma Tag HTML dentro do App.
// Também podemos exportar esse componente de outro arquivo JS.
function App() {
  return (
    <div>
      <Component/>
      <Component2/>
      <Component3/>
    </div>
  );
}

export default App;