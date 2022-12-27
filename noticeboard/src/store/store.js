import { configureStore } from '@reduxjs/toolkit'
import chooseReducer from '../store/chooseSlice'
export const store = configureStore({
    reducer: {
        change: chooseReducer,
    },
})