import { createContext, useReducer } from "react";
import { BoardReducer } from "../store/BoardReducer";

export const BoardContext = createContext(null);

export const BoardProvider = ({ children }) => {

    
    const [board, dispatch] = useReducer(BoardReducer, JSON.parse(localStorage.getItem("board")) || []);


    const value = [board, dispatch];

    return (
        <BoardContext.Provider value={value}>
            {children}
        </BoardContext.Provider>
    );
}