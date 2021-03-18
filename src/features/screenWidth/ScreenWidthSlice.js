import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "screenWidth",
  initialState: window.innerWidth,
  reducers: {
    updateWidth: (state, action) => action.payload,
  },
};

const screenWidthSlice = createSlice(options);

export const { updateWidth } = screenWidthSlice.actions;
export const screenWidthReducer = screenWidthSlice.reducer;
