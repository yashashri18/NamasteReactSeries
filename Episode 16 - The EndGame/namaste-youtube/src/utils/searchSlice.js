import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        results:{}
    },
    reducers:{
        cacheResults: (state, action) => {
            state.results = {...action.payload , ...state.results}
        }
    }
})
export const {cacheResults} =  searchSlice.actions
export default searchSlice.reducer;
