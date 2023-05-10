import { configureStore } from "@reduxjs/toolkit";
import displaySlice from "../features/displaySlice";

const store = configureStore({
    reducer: {
        display: displaySlice,
    },
})

export default store;