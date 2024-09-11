import { createSlice } from '@reduxjs/toolkit'
import { User } from '~/types'


export const userStore = createSlice({
    name: 'user',
    initialState: {
        id: null,
        name: null
    },
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload?.id;
            state.name = action.payload?.name;
        },
        clearUser: (state) => {
            state.id = null
        },
    },
})

export const { setUser, clearUser } = userStore.actions

export const getUser = (state: { user:User}) => state.user;

export default userStore.reducer;
