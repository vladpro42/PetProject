import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createBoardReducer from "../slice/createBoardSlice";
import { taskApi } from "../service/task";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        board: createBoardReducer,

        [taskApi.reducerPath]: taskApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(taskApi.middleware),
});

setupListeners(store.dispatch);