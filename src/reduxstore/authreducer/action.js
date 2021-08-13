import { createAsyncThunk } from "@reduxjs/toolkit";

import { SignInWithAPI, SignUpWithAPI } from ".";

export const SignIn = createAsyncThunk("auth/sign-in", async (payload) => {
    try {
        const response = await SignInWithAPI(payload);
        return response.data;
    } catch (e) {
      return { ...e.response, error: true };
    }
});

export const SignUp = createAsyncThunk("auth/sign-up", async (payload) => {
  try {
    const response = await SignUpWithAPI(payload);
    return response.data;
  } catch (e) {
    return { ...e.response, error: true };
  }
});

export const SignOut = createAsyncThunk("auth/sign-out", async () => {
    return;
})
