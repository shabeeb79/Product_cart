import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 export const FetchProducts = createAsyncThunk("products/FetchProducts",async()=>{
    const res = await axios.get("https://dummyjson.com/products");
    const products = await res.data.products
    return products
 })
 const ProductSlice = createSlice({
    name:"products",
    initialState:{
        loading:false,
        items:[],
        error:""
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(FetchProducts.pending,(state)=>{
            state.loading=true;
        })
    .addCase(FetchProducts.fulfilled,(state,action)=>{
        state.loading=false
        state.items=action.payload
        
    })
    .addCase(FetchProducts.rejected,(state,action)=>{
        state.loading=false
        state.error=action.error.message
    })
    } 
 })
 export default ProductSlice.reducer;