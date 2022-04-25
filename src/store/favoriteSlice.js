import { createSlice } from "@reduxjs/toolkit";



const favoriteSlice = createSlice({
    name: 'favor',
    initialState: {
        prodFav: localStorage.getItem("favor")
        ? JSON.parse(localStorage.getItem("favor"))
        : [],
    },
    reducers: {
        checkFavor: (state, action) => {
            const index = state.prodFav.findIndex(
                (item) => item.id === action.payload.id
            );
            if(index<0) state.prodFav.push(action.payload);
            else {
                state.prodFav.splice(index ,1);
            }
            
            localStorage.setItem("favor", JSON.stringify(state.prodFav));
        },
    }
})
export const { checkFavor } = favoriteSlice.actions;
export default favoriteSlice.reducer; 