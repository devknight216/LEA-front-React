import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "./propertyreducer/slice";
import authReducer from "./authreducer/slice";
import userReducer from "./userreducer/slice";
import reservationReducer from "./bookreducer/slice";

const store = configureStore({
  reducer: {
    properties: propertyReducer,
    auth: authReducer,
    user: userReducer,
    reservation: reservationReducer,
  },
});

export default store;
