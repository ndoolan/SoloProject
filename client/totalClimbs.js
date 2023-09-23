import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        totalClimbs: [],
        activeDisplay: 'all'
}

export const totalClimbs = createSlice({
    name: 'totalClimbs',
    initialState,
    reducers: {

    }
})