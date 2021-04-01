import { createSlice } from "@reduxjs/toolkit";

/**
 * cette variable permet de définir le nom de la tranche de réduction, initialiser son state,
 * et creer des créateurs d'actions définis dans reducers
 */
const options = {
  name: "articleQuantite",
  initialState: 1,
  reducers: {
    updateCount: (state, action) => action.payload,
  },
};

/**la fonction creatSlice renvoie des créateurs d'actions définis dans options, et une tranche du réducteur
 *
 */
const produitSlice = createSlice(options);
/**
 * exporte le créateur d'action défini dans la variable options
 */
export const { updateCount } = produitSlice.actions;

/**
 * exorte la tranche de réduction définie dans la variable options
 */
export const articleQuantiteReducer = produitSlice.reducer;
