import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./DataUser";

export const store = configureStore({
    reducer:{
        data:dataSlice,
    }
})