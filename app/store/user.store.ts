import { createSlice } from '@reduxjs/toolkit'

export const userStore = createSlice({
    name: 'user',
    initialState: {
        id: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload
        },
        clearUser: (state) => {
            state.id = null
        },
    },
})

export const { setUser, clearUser } = userStore.actions

export const getUser = (state: any) => state.user.id;

export default userStore.reducer;
