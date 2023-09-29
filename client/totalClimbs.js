import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        totalClimbs: [],
        activeDisplay: 'all',
        name: '',
        grade: '',
        location: '',
}

export const totalClimbs = createSlice({
    name: 'totalClimbs',
    initialState,
    reducers: {
        setClimbName: (state, action) => {
            state.name = action.payload;
        },
        setGrade: (state, action) => {
            state.grade = action.payload;
        },
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        setTotalClimbs: (state, action) => {
            state.totalClimbs = action.payload;
        }
    }
})

export const { setClimbName, setGrade, setLocation, setTotalClimbs } = totalClimbs.actions;
export default totalClimbs.reducer;