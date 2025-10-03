import './App.css'
import PrimeiroComp from './componentes/PrimeiroComp'
import Data from './componentes/Data'
import Hook from './componentes/Hook'
import Contador from './componentes/Contador' 

function App() {

  return (
    <div className="App">
      <h1>Fundamentos de React</h1>
      <div><PrimeiroComp /></div>
      <div><Data /></div>
      <div><Hook /></div>
      <div><Contador title = 'Contador de cliques'/></div>

    </div>
  )
}
export default App
