import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "searchTerm",
  initialState: "",
  reducers: {
    updateSearchTerm: (state, action) => action.payload,
  },
};

const searchTermSlice = createSlice(options);

export const { updateSearchTerm } = searchTermSlice.actions;
export const searchTermReducer = searchTermSlice.reducer;
