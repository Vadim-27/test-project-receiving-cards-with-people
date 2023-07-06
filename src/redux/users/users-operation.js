import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../shared/services/usersApi';

export const fetchAllUsers = createAsyncThunk(
    'users/all',
    async (data, { rejectWithValue }) => {
        console.log("data", data)
        try {
            const result = await api.getAllUsers(data);
            console.log("resultOO", result)
          return result;
        } catch ({ response }) {
          return rejectWithValue(response);
        }
    }
);