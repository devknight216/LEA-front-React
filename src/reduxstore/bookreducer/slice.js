import { createSlice } from "@reduxjs/toolkit";
import { createReservation, getAllReservation, getHostReservations, getReservationById } from "./action";
const PREFIX = "reservation";

const STATUS = {
  INITIAL: 0,
  FULFILLED: 1,
  PENDING: 2,
  REJECTED: 3,
};

const isPendingAction = (action) => action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("pending");
const isRejectedAction = (action) => action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("rejected");

export const ReservationSlice = createSlice({
  name: "reservation",
  initialState: {
    reservations: [],
    reservation: {},
    status: STATUS.INITIAL,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReservation.fulfilled, (state, action) => {
        state.reservation = action.payload;
        state.status = STATUS.FULFILLED;
      })
      .addCase(getReservationById.fulfilled, (state, action) => {
        state.reservation = action.payload;
        state.status = STATUS.FULFILLED;
      })
      .addCase(getAllReservation.fulfilled, (state, action) => {
        state.reservations = action.payload;
        state.status = STATUS.FULFILLED;
      })
      .addCase(getHostReservations.fulfilled, (state, action) => {
        state.reservations = action.payload;
        state.status = STATUS.FULFILLED;
      })
      .addMatcher(isPendingAction, (state, action) => {
        state.status = STATUS.PENDING;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.status = STATUS.REJECTED;
      });
  },
});
export { createReservation, getReservationById, getAllReservation };
export default ReservationSlice.reducer;
