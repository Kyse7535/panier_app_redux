import { createSlice } from "@reduxjs/toolkit";

/**
 * cette variable permet de définir le nom de la tranche de réduction, initialiser son state,
 * et creer des créateurs d'actions définis dans reducers
 */
const options = {
  name: "searchTerm",
  initialState: "",
  reducers: {
    updateSearchTerm: (state, action) => action.payload,
  },
};

/**la fonction creatSlice renvoie des créateurs d'actions définis dans options, et une tranche du réducteur
 *
 */
const searchTermSlice = createSlice(options);

/**
 * exporte le créateur d'action défini dans la variable options
 */
export const { updateSearchTerm } = searchTermSlice.actions;

/**
 * exorte la tranche de réduction définie dans la variable options
 */
export const searchTermReducer = searchTermSlice.reducer;
