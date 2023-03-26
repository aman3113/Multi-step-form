import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user-info",
  initialState: {
    name: "",
    email: "",
    phone: "",
    error: false,
  },
  reducers: {
    changeUserInfo(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    handleError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { changeUserInfo, handleError } = userSlice.actions;

export default userSlice;
