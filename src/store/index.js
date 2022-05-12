import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import favoriteSlice from "./favoriteSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        favorite: favoriteSlice,
        user: userSlice,
    },
})