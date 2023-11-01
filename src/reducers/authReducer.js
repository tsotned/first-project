import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  address: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin(state, action) {
      state.username = action.payload.username;
      state.address = action.payload.address;
    },

    signout(state) {
      state.username = "";
      state.address = "";
    },
  },
});

export const { signin, signout } = authSlice.actions;
export default authSlice.reducer;
