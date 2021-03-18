import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "allArticlePanier",
  initialState: [],
  reducers: {
    addArticle: (state, action) => {
      const index = state.findIndex(
        (article) => article.id === action.payload.id
      );
      if (index === -1) {
        const article = {
          id: action.payload.id,
          titre: action.payload.titre,
          image: action.payload.image,
          prix: action.payload.prix,
          quantite: parseInt(action.payload.quantite),
        };
        state.push(article);
      } else {
        state[index].quantite += parseInt(action.payload.quantite);
      }
    },
    deleteArticle: (state, action) => {
      const index = state.findIndex(
        (article) => article.id === action.payload.id
      );
      state.splice(index, 1);
    },
  },
};

const listaArticlePanierSlice = createSlice(options);
export const { addArticle, deleteArticle } = listaArticlePanierSlice.actions;
export const allArticlePanierReducer = listaArticlePanierSlice.reducer;
