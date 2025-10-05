import  { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        AddCart:(state,action)=>{
            state.push(action.payload)
        },
        RemoveCart:(state,action)=>{
          return state.filter((item)=>item.id !== action.payload)
        }
    }
})

   export const {AddCart,RemoveCart} = CartSlice.actions;
   export default CartSlice.reducer;