import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteUserFromAPI, getAllUsersFromAPI, getUserByIdFromAPI, updateUserFromAPI } from ".";
export const getAllUsers = createAsyncThunk( "user/getAll", async() => {
        const response = await getAllUsersFromAPI();
        return response.data;
    }
)

export const deleteUser = createAsyncThunk("user/deleteOne", async( payload ) => {
        const response = await deleteUserFromAPI(payload);
        return response.data
    }
)

export const updateUser = createAsyncThunk("user/updateOne", async( payload ) => {
        const response = await updateUserFromAPI(payload.id, payload.body);
        return response.data
    }
)

export const getUserByID = createAsyncThunk("user/findOne", async( payload ) => {
        const response = await getUserByIdFromAPI(payload);
        return response.data
    }
)