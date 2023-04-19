import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
        }
    }
})


export const {setUser} = userSlice.actions
export default userSlice.reducer

