import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: '',
    password: '',
    loggedIn: 'false',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})