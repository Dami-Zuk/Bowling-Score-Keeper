
import { createContext, useContext, useReducer } from "react";
import { Reducer, initialState } from "../reducers/Reducer";

// Context provides data globally to any component that asks for it.
// Storing and updating the global state and storing players, scores, match length etc. data

const GameContext = createContext();

// Wrapper component
export const GameProvider = ({ children }) => {
    
    // state - current game state; dispatch - function to send actions
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    );
};

// Helper hook
export const useGameContext = () => useContext(GameContext);


