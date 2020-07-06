import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buton from './components/button/Buton'

function App() {
      let handleAgregar=()=>{
        console.log("Esto esta agregando")
    }
    let handleBorrar=()=>{
        console.log("Esto esta borrando")
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Buton
        texto="Agregar elemetos"
        logica={handleAgregar}
        />
        <Buton
        texto="Borrar elemetos"
        logica={handleBorrar}
        />
      
      </header>
    </div>
  );
}

export default App;
