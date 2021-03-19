import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "articleQuantite",
  initialState: 1,
  reducers: {
    updateCount: (state, action) => action.payload,
  },
};

const produitSlice = createSlice(options);
export const { updateCount } = produitSlice.actions;
export const articleQuantiteReducer = produitSlice.reducer;
