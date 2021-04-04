import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "allfavoriteArticles",
  initialState: [],
  reducers: {
    addArticleToFavorite: (state, action) => {
      const index = state.findIndex(
        (article) => article.id === action.payload.article.id
      );
      if (index === -1) state.push(action.payload.article);
      return state;
    },
    removeArticleFromFavorite: (state, action) => {
      const index = state.findIndex(
        (article) => article.id === action.payload.id
      );
      state.splice(index, 1);
      return state;
    },
    deleteAllfavorite: (state) => [],
  },
};

const allfavoritesArticlesSlice = createSlice(options);

export const {
  addArticleToFavorite,
  removeArticleFromFavorite,
  deleteAllfavorite,
} = allfavoritesArticlesSlice.actions;

export const allFavoriteArticlesReducer = allfavoritesArticlesSlice.reducer;
