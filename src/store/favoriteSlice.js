import { createSlice } from "@reduxjs/toolkit";



const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        itemInCart: localStorage.getItem("favorite")
        ? JSON.parse(localStorage.getItem("favorite"))
        : [],
    },
    reducers: {
        addFavor: (state, action) => {
            const duplicate = state.itemInCart.findIndex(
                (item) => item.cartId === action.payload.cartId
            );
            if(duplicate<0) state.itemInCart.push(action.payload);
            
            localStorage.setItem("favorite", JSON.stringify(state. itemInCart));
        },
        deleteItemFromCart: (state, action) => {
            state.itemInCart = state.itemInCart.filter(item => item.cartId !== action.payload);
            
            localStorage.setItem("favorite", JSON.stringify(state.itemInCart));
        }
    }
})
export const {} = favoriteSlice.actions;
export default favoriteSlice.reducer; 