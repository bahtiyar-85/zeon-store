import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemInCart: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    },
    reducers: {
        addItemToCart: (state, action) => {
            const duplicate = state.itemInCart.findIndex(
                (item) => item.cartId === action.payload.cartId
            );
            if(duplicate<0) state.itemInCart.push(action.payload);
            
            localStorage.setItem("cart", JSON.stringify(state. itemInCart));
        },
        deleteItemFromCart: (state, action) => {
            state.itemInCart = state.itemInCart.filter(item => item.cartId !== action.payload);
            
            localStorage.setItem("cart", JSON.stringify(state.itemInCart));
        }
    }
})
export const {addItemToCart, deleteItemFromCart} = cartSlice.actions;
export default cartSlice.reducer; 