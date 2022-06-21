import { configureStore } from "@reduxjs/toolkit";
import clothSlice from "./clothSlice";
const store = configureStore({

    reducer: {
        cloth: clothSlice.reducer
    }
})

export default store