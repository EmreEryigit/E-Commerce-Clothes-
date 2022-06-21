import { createSlice } from "@reduxjs/toolkit";

const clothSlice = createSlice({
    name: "cloth",
    initialState: {
        favorites: [],
        cart: [],

    },
    reducers: {
        addToFavorites: (state, action) => {
            state.favorites.push(action.payload);

        },
        removeFromFavorites: (state, action) => {
            state.favorites.splice(action.payload, 1);
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cart.splice(action.payload, 1);
        },


    }
})

export default clothSlice;
export const { addToFavorites, removeFromFavorites, addToCart, removeFromCart } = clothSlice.actions;