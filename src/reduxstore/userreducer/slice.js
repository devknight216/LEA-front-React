import { createSlice } from "@reduxjs/toolkit";
import { deleteUser, getAllUsers, getUserByID, updateUser } from "./action";
const PREFIX = "user";

const STATUS = {
  INITIAL: 0,
  FULFILLED: 1,
  PENDING: 2,
  REJECTED: 3,
};

const isPendingAction = (action) => action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("pending");
const isRejectedAction = (action) => action.type.startsWith(`${PREFIX}/`) && action.type.endsWith("rejected");

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    user: {},
    status: STATUS.INITIAL,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = STATUS.FULFILLED;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = STATUS.FULFILLED;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = STATUS.FULFILLED;
      })
      .addCase(getUserByID.fulfilled, (state, action) => {
        state.user = action.payload;
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

export { getAllUsers, deleteUser, getUserByID, updateUser };
export default UserSlice.reducer;
