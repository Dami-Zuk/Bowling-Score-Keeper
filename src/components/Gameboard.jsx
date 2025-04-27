import React from 'react';
import ScoreInput from './Score';
import { useGameContext } from '../context/GameContext';

const Gameboard = () => {
  const { state } = useGameContext();

  if (state.players.length === 0) {
    return <p>Please add players first!</p>;
  }

  return (
    <div>
      <h2>Game {state.currentGame}</h2>
      {state.isMatchOver ? (
        <h2>Match Over!</h2>
      ) : (
        <ScoreInput />
      )}
    </div>
  );
};

export default Gameboard;