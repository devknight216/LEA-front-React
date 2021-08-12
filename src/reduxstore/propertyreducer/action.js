import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAllPropertiesFromAPI, getPropertyByIdFromAPI, deletePropertyByIdFromAPI, updatePropertyByIdFromAPI, craeteNewPropertFromAPI } from "."; 

export const getAllProperties = createAsyncThunk(
    "property/getAll",
    async() => {
        const response = await getAllPropertiesFromAPI();
        console.log("API response", response.data);
        return response.data;
    }
);

export const getPropertyById = createAsyncThunk(
    "property/getById",
    async( id ) => {
        const response = await getPropertyByIdFromAPI(id);
        console.log("API response", response);
        return response.data;
    }
)

export const deletePropertyById = createAsyncThunk(
    "property/deleteById",
    async(id) => {        
        const response = await deletePropertyByIdFromAPI(id);
        console.log("API response", response);
        return response.data;
    }
)

export const updatePropertyById = createAsyncThunk(
    "property/updateById",
    async(id, requestBody) => {
        const response = await updatePropertyByIdFromAPI(id, requestBody);
        console.log("API response", response);
        return response.data;
    }
)

export const createNewProperty = createAsyncThunk(
    "property/create",
    async(requestBody) => {
        const response = await craeteNewPropertFromAPI(requestBody);
        console.log("API response", response);
        return response.data;
    }
)