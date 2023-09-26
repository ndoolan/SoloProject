import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: '',
    password: '',
    loggedIn: 'false',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUserName: (state, action) => {
            state.username = action.payload;
        },
        createPassword: (state, action) => {
            state.password = action.payload;
        },
        login: (state, action) => {
            state.loggedIn = true;
        },
        logout: (state,action) => {
            state.loggedIn = false;
        }
    }
})

export const { createUserName, createPassword } = userSlice.actions;
export default userSlice.reducer;