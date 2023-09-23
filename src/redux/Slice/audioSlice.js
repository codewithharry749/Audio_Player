import { createSlice } from "@reduxjs/toolkit";


const Songslice = createSlice({
    name: 'Song',
    initialState: [],
    reducers: {
        playSong: (state, action) => { state.push(action.payload) },
    },
});

export const getSongselector = (state) => state.song

export const { playSong } = Songslice.actions;

export default Songslice.reducer;