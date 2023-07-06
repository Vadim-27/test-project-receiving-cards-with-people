import { createSlice } from "@reduxjs/toolkit";

import { fetchAllUsers } from "./users-operation";

const usersInitialState = {
    
    users: [],
    isLoading: false,
    error: null,
}
const handlePending = (state) => {
    state.isLoading = true;
}
const handleReject = (state, action) => {
    state.users = [];
    state.isLoading = false;
    state.error = action.payload;
}

const userSlice = createSlice({
    name: "users",
    initialState: usersInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                handlePending(state);
            })
            .addCase(fetchAllUsers.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                console.log("payload", payload)
                state.users = payload.users;
                state.error = null;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                handleReject(state, action);
        })
    } 
})

export default userSlice.reducer;