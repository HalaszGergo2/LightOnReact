import { useState } from 'react';
import './App.css';
import Jatekter from './components/Jatekter';


function App() {
  const [lista,setLista] = useState([true, false, true, false, true, false, true, false, true])

  function katt(valt){
    const segedLista = [...lista]
    segedLista[valt] = !segedLista[valt];
    setLista([...segedLista])
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1>LightOn</h1>
      </header>
      <article>
        <Jatekter lista={lista} katt={katt}/>
      </article>
    </div>
  );
}

export default App;
