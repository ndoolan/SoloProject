import { configureStore } from '@reduxjs/toolkit'
import climbsReducer from './totalClimbs'
import user from './userSlice'

export const store = configureStore({
    reducer: {
        user,
        climbsReducer
    },
})