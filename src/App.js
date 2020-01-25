import React from 'react';
import Pokegame from './components/Pokegame'
import './scss/style.scss'

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Pokedex</h1>
      <Pokegame />
    </div>
  );
}

export default App;
