import { createSlice } from "@reduxjs/toolkit";

const initialState = { amount: 0 };

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.amount += action.payload;
    },
    withdraw(state, action) {
      state.amount -= action.payload;
    },
  },
});

export const { deposit, withdraw } = accountSlice.actions;
export default accountSlice.reducer;
