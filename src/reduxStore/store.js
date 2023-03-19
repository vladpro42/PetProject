import { configureStore } from "@reduxjs/toolkit";
import createBoardReducer from "../slice/createBoardSlice";

console.log(createBoardReducer)

export const store = configureStore({
    reducer: {
        board: createBoardReducer,
    },
})