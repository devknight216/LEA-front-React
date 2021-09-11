import React from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createReservationFromAPI, getAllReservationsFromAPI, getHostReservationFromAPI, getReservationByIdFromAPI } from ".";

export const createReservation = createAsyncThunk("reservation/create", async (payload) => {
  const response = await createReservationFromAPI(payload);
  return response.data;
});

export const getReservationById = createAsyncThunk("reservation/findOne", async (payload) => {
  const response = await getReservationByIdFromAPI(payload);
  return response.data;
});

export const getAllReservation = createAsyncThunk("reservation/getAll", async () => {
  const response = await getAllReservationsFromAPI();
  return response.data;
});

export const getHostReservations = createAsyncThunk("reservation/getHost", async (payload) => {
  const response = await getHostReservationFromAPI(payload);
  return response.data;
});
