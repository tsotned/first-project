import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./reducers/accountReducer";
import authReducer from "./reducers/authReducer";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    auth: authReducer,
  },
});
console.log("asd");
