import { createSlice } from "@reduxjs/toolkit";

/**
 * cette variable permet de définir le nom de la tranche de réduction, initialiser son state,
 * et creer des créateurs d'actions définis dans reducers
 */
const options = {
  name: "allArticlePanier",
  initialState: [],
  reducers: {
    addArticle: (state, action) => {
      const index = state.findIndex(
        (article) => article.id === action.payload.article.id
      );
      if (index === -1) {
        const article = {
          id: action.payload.article.id,
          titre: action.payload.article.titre,
          image: action.payload.article.image,
          prix: action.payload.article.prix,
          quantite: parseInt(action.payload.quantite),
        };
        console.log(action.payload.quantite);
        state.push(article);
      } else {
        state[index].quantite += parseInt(action.payload.quantite);
      }

      return state;
    },
    deleteArticle: (state, action) => {
      const index = state.findIndex(
        (article) => article.id === action.payload.id
      );
      state.splice(index, 1);
      return state;
    },
    modifyQtiteArticle: (state, action) => {
      const index = state.findIndex(
        (article) => article.id === action.payload.id
      );
      state[index].quantite =
        !action.payload.valeur === "" ? parseInt(action.payload.valeur) : 1;
      return state;
    },
  },
};

/**la fonction creatSlice renvoie des créateurs d'actions définis dans options, et une tranche du réducteur
 *
 */
const listeArticlePanierSlice = createSlice(options);

/**
 * exporte le créateur d'action défini dans la variable options
 */
export const {
  addArticle,
  deleteArticle,
  modifyQtiteArticle,
} = listeArticlePanierSlice.actions;

/**
 * exorte la tranche de réduction définie dans la variable options
 */
export const allArticlePanierReducer = listeArticlePanierSlice.reducer;
