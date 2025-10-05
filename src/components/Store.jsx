import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductFetch";
import cartReducer from "./Cart";

const store = configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer
    }
})
export default store