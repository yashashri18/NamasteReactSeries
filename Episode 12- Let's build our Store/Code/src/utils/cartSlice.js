import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state, action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state,action) =>{
            state.items.pop();
            state.items = state.items.filter(obj => obj.id !== action.payload);
        },
        clearCart: (state)=>{
            state.items = [];
        },
    }
});

export const {addItem, removeItem,clearCart} = cartSlice.actions

export default cartSlice.reducer
