import { useGameContext } from "../context/GameContext";

const ScoreInput = () => {
    const { state, dispatch } = useGameContext();

    const handleScoreChange = (playerIndex, frameIndex, value) => {
        dispatch({
            type: "ADD_FRAME_SCORE",
            payload: {
                playerIndex,
                gameIndex: state.currentGame - 1,
                frameIndex,
                score: parseInt(value) || 0,
            },
        });
    };

    return (
        <div>
            {state.players.map((player, playerIndex) => (
                <div key={playerIndex} style={{ marginBottom: "2rem" }}>
                    <h3>{player.name}</h3>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        {/* Render 10 frames */}
                        {[...Array(10)].map((_, frameIndex) => (
                            <input
                                key={frameIndex}
                                type="number"
                                placeholder={`F${frameIndex + 1}`}
                                value={
                                    player.scores[state.currentGame - 1]?.[frameIndex] || ""
                                }
                                onChange={(e) =>
                                    handleScoreChange(playerIndex, frameIndex, e.target.value)
                                }
                                style={{ width: "50px" }}
                            />
                        ))}
                    </div>
                    <div>
                        Total: {player.scores[state.currentGame - 1]?.reduce((acc, val) => acc + (val || 0), 0) || 0}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ScoreInput;