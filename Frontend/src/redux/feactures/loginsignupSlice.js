import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: null,
};

const loginsignupSlice = createSlice({
  name: "loginsignup",
  initialState,
  reducers: {
    Login: (state = initialState, action) => {
      state.user = action.payload.user;
      state.loading = action.payload.loading;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.error = action.payload.error;
    },
    Signup: (state = initialState, action) => {
      state.user = action.payload.user;
      state.loading = action.payload.loading;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.error = action.payload.error;
    }
  },
});

export const { Login } = loginsignupSlice.actions;
export default loginsignupSlice.reducer;
