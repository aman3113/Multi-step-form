import { configureStore } from "@reduxjs/toolkit";
import planSlice from "./planSlice";
import userSlice from "./userSlice";

const Store = configureStore({
  reducer: {
    user: userSlice.reducer,
    plan: planSlice.reducer,
  },
});

export default Store;
