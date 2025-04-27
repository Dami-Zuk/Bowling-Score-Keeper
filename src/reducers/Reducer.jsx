
// Reducer manages how the state updates; listens for Actions (capitalized strings)
// Returns new versions of the state based on the current state and Action

// Starting state 
export const initialState = {
    players: [], // Each player: { name: "Player 1", scores: [[0,0,...]], totalScore: 0 }
    matchLength: 3, // or 5 if chosen
    currentGame: 1,
    isMatchOver: false,
};

export const Reducer = (state, action) => {
    switch (action.type) {

        case "SET_MATCH_LENGTH":
            return { ...state, matchLength: action.payload };
  
        case "ADD_PLAYERS":
            return {
                ...state,
                // players - array of player names
                players: action.payload,
            };

        case "ADD_FRAME_SCORE":
        // Action: { playerIndex, frameIndex, score }
        const updatedPlayers = [...state.players];
        const player = updatedPlayers[action.payload.playerIndex];
  
        if (!player.scores[action.payload.gameIndex]) {
            player.scores[action.payload.gameIndex] = [];
        }
  
        player.scores[action.payload.gameIndex][action.payload.frameIndex] =
            action.payload.score;
  
        return {
            ...state,
            players: updatedPlayers,
        };
  
        case "END_GAME":
        // Calculate game totals
        const playersWithUpdatedScores = state.players.map((player) => {
            const gameScore = player.scores[state.currentGame - 1].reduce(
                (a, b) => a + b, 0
            );

            return {
                ...player,
                gameScores: [...player.gameScores, gameScore],
                totalScore: player.totalScore + gameScore,
            };
        });
  
        const isMatchOver = state.currentGame >= state.matchLength;
  
            return {
                ...state,
                players: playersWithUpdatedScores,
                currentGame: state.currentGame + 1,
                isMatchOver,
            };
  
        case "RESET":
            return initialState;
  
        default:
            return state;
    }
  };
  


