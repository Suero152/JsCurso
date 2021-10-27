import './App.css';
import {Paragraph} from './components/paragraph_component'

function Component(){
  return <h1>Hello, World.</h1>;
}

function App() {
  return (
    <div className="App">
      <Component/>
      <Paragraph/>
    </div>
  );
}

export default App;
