import { createSlice } from "@reduxjs/toolkit";
import { SignIn, SignUp, SignOut } from "./action";
import { Toast } from "components/common/notification";

export const PropertySlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SignIn.fulfilled, (state, action) => {
        if (action.payload.error) {
          Toast("", Object.values(action.payload.data)[0], "danger");
        } else {
          state.token = action.payload.token;
          state.user = {
            userID: action.payload._id,
            name: action.payload.name,
            email: action.payload.email,
            role: action.payload.role,
          };
          localStorage.setItem("token", action.payload.token);
          localStorage.setItem("user", JSON.stringify(state.user));
        }
      })
      .addCase(SignUp.fulfilled, (state, action) => {
        if (action.payload.error) {
          Toast("", Object.values(action.payload.data)[0], "danger");
        } else{
          state.user = {
            userID: action.payload._id,
            name: action.payload.name,
            email: action.payload.email,
            role: action.payload.role,
          };
        }
      })
      .addCase(SignOut.fulfilled, (state) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        state.user = null;
        state.token = null;
      });
  },
});

export { SignIn, SignUp };
export default PropertySlice.reducer;
