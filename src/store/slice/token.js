import { createSlice } from "@reduxjs/toolkit";
export const tokenSlice = createSlice({
  name: "token",
  initialState: [],
  reducers: {
    updateToken: (state, action) => {
      console.log("handle update:", action.payload);
      state.push(action.payload);
    },
  },
});

export const { updateToken } = tokenSlice.actions;
export const selectToken = (state) => state.token;
export default tokenSlice.reducer;
