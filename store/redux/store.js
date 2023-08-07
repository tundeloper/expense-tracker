import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./expense";


export const store = configureStore({
     reducer: {
        expense: favoriteReducer
    }
})