import { configureStore } from "@reduxjs/toolkit";
import createBoardReducer from "../slice/createBoardSlice";

export const store = configureStore({
    reducer: {
        board: createBoardReducer,
    },
})