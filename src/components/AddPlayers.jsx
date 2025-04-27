import { useState } from "react";
import { useGameContext } from "../context/GameContext";

function AddPlayers() {
  const [playerNames, setPlayerNames] = useState(["", "", "", ""]);  // Adjust as per max players
  const { dispatch } = useGameContext();

  const handleNameChange = (index, name) => {
    const updatedNames = [...playerNames];
    updatedNames[index] = name;
    setPlayerNames(updatedNames);
  };

  const handleSubmit = () => {
    const players = playerNames
      .filter((name) => name !== "") // Remove empty names
      .map((name) => ({ name, scores: Array(10).fill(0) })); // Initialize scores for each player

    dispatch({
      type: "ADD_PLAYERS",
      payload: players,
    });
  };

  return (
    <div>
      <h2>Add Players</h2>
      {playerNames.map((name, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Player ${index + 1}`}
          value={name}
          onChange={(e) => handleNameChange(index, e.target.value)}
        />
      ))}
      <button onClick={handleSubmit}>Add Players</button>
    </div>
  );
}

export default AddPlayers;




