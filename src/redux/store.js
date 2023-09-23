import { configureStore } from "@reduxjs/toolkit";
import SongReducer from './Slice/audioSlice'

export const store = configureStore({
    reducer: {
        song: SongReducer
    },
    devTools: true
})

