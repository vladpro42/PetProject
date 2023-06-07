import { configureStore } from "@reduxjs/toolkit";
import createBoardReducer from "./modules/Board/reducer/createBoardSlice";
import { taskApi } from "./service/task";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import userReducer from "./modules/SignIn/api/userSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        board: createBoardReducer,
        [taskApi.reducerPath]: taskApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([taskApi.middleware])

});

setupListeners(store.dispatch);