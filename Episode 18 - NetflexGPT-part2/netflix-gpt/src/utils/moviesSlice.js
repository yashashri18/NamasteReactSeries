import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
  name: 'movies',
  initialState : {
    nowPlayingMovies:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
        state.nowPlayingMovies = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNowPlayingMovies} = moviesSlice.actions
export default moviesSlice.reducer