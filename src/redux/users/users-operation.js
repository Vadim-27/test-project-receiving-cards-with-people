import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../shared/services/usersApi';

export const fetchAllUsers = createAsyncThunk(
    'users/all',
    async (_, { rejectWithValue }) => {
        try {
            const result = await api.getAllUsers();
            console.log("resultOO", result)
          return result;
        } catch ({ response }) {
          return rejectWithValue(response);
        }
    }
);