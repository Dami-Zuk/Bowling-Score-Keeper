import React from 'react';
import './App.css';
import { GameProvider } from './context/GameContext'; // << IMPORT THIS
import AddPlayersTest from './components/AddPlayersTest';
import Gameboard from './components/Gameboard';

function App() {
  return (
    <GameProvider> {/* << WRAP EVERYTHING INSIDE */}
      <div>
        <h1>Bowling Score Keeper</h1>
        <AddPlayersTest />
        <Gameboard />
      </div>
    </GameProvider>
  );
}

export default App;