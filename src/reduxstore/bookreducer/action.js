import { createAsyncThunk } from "@reduxjs/toolkit";
import { createReservationFromAPI, getAllReservationsFromAPI, getReservationByIdFromAPI } from ".";

export const createReservation = createAsyncThunk( "reservation/getAll", async( payload ) => {
        const response = await createReservationFromAPI(payload);
        return response.data;
    }
)

export const getReservationById = createAsyncThunk( "reservation/findOne", async( payload) => {
        const response = await getReservationByIdFromAPI(payload);
        return response.data;
    } 
)

export const getAllReservation = createAsyncThunk( "", async(  ) => {
        const response = await getAllReservationsFromAPI();
        return response.data;
    } 
)