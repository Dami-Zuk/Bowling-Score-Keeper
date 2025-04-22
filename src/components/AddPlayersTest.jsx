import React, { useReducer, useState } from "react";
import { Reducer, initialState } from "../reducers/Reducer.jsx";

function AddPlayersTest() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const [input, setInput] = useState("");
  const [playerList, setPlayerList] = useState([]);

  const handleAdd = () => {
    if (input.trim()) {
      setPlayerList([...playerList, input.trim()]);
      setInput("");
    }
  };

  const handleSubmitPlayers = () => {
    const playerObjects = playerList.map((name) => ({
      name,
      scores: Array(10).fill(null), // 10 frames
      totalScore: 0,
      gamesWon: 0,
    }));
  
    dispatch({ type: "ADD_PLAYERS", payload: playerObjects });
    setPlayerList([]);
  };

  return (
    <div>
      <h2>Add Players</h2>
      <input
        type="text"
        placeholder="Player name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {playerList.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>

      <button onClick={handleSubmitPlayers}>Submit Players</button>

      <hr />
      <h3>Players in Game State:</h3>
      <ul>
        {state.players.map((player, idx) => (
          <li key={idx}>
            {player.name} - Score: {player.totalScore}, Games Won: {player.gamesWon}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddPlayersTest;