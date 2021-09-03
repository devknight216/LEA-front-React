import { createSlice } from "@reduxjs/toolkit";
import { SignIn, SignUp, SignOut } from "./action";
import { Toast } from "components/common/notification";

const PREFIX = 'auth';

const STATUS = {
    INITIAL: 0,
    FULFILLED: 1,
    PENDING: 2,
    REJECTED: 3
}

const isPendingAction = (action) => 
    action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("pending")
const isRejectedAction = (action) => 
    action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("rejected")


export const PropertySlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    status: STATUS.INITIAL
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
            avatarURL: action.payload.avatarURL,
          };
          state.status = STATUS.FULFILLED
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
          state.status = STATUS.FULFILLED
        }
      })
      .addCase(SignOut.fulfilled, (state) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        state.status = STATUS.INITIAL
        state.user = null;
        state.token = null;
      })  
      .addMatcher(
        isPendingAction,
        ( state, action ) => {
              state.status = STATUS.PENDING
          }
        )
      .addMatcher(
          isRejectedAction,
          ( state, action ) => {
            state.status = STATUS.REJECTED
          }
        )
      },
});

export { SignIn, SignUp };
export default PropertySlice.reducer;
