import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAllPropertiesFromAPI } from "."; 

export const getAllProperties = createAsyncThunk(
    "property/getAll",
    async(requestBody) => {
        const response = await getAllPropertiesFromAPI(requestBody);
        console.log("API response", response);
        return response.data;
    }
);