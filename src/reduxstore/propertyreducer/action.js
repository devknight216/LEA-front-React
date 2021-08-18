import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAllPropertiesFromAPI, getPropertyByIdFromAPI, deletePropertyByIdFromAPI, updatePropertyByIdFromAPI, craeteNewPropertFromAPI, searchPropertiesFromAPI } from "."; 

export const getAllProperties = createAsyncThunk(
    "property/getAll",
    async() => {
        const response = await getAllPropertiesFromAPI();
        return response.data;
    }
);

export const getPropertyById = createAsyncThunk(
    "property/getById",
    async( id ) => {
        const response = await getPropertyByIdFromAPI(id);
        return response.data;
    }
)

export const deletePropertyById = createAsyncThunk(
    "property/deleteById",
    async(id) => {        
        const response = await deletePropertyByIdFromAPI(id);
        return response.data;
    }
)

export const updatePropertyById = createAsyncThunk(
    "property/updateById",
    async(payload) => {
        const {id, body} = payload;
        const response = await updatePropertyByIdFromAPI(id, body);
        return response.data;
    }
)

export const createNewProperty = createAsyncThunk(
    "property/create",
    async(requestBody) => {
        const response = await craeteNewPropertFromAPI(requestBody);
        return response.data;
    }
)

export const searchProperties = createAsyncThunk(
    "property/search",
    async(requestBody) => {
        const response = await searchPropertiesFromAPI(requestBody);
        return response.data;
    }
)