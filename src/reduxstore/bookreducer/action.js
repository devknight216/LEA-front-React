import { createAsyncThunk } from "@reduxjs/toolkit";
import { createReservationFromAPI } from ".";

export const createReservation = createAsyncThunk( "user/getAll", async( payload ) => {
        const response = await createReservationFromAPI(payload);
        return response.data;
    }
)