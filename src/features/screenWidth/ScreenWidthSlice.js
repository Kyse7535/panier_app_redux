import { createSlice } from "@reduxjs/toolkit";

/**
 * cette variable permet de définir le nom de la tranche de réduction, initialiser son state,
 *  et crée des créateurs d'actions définis dans reducers
 */
const options = {
  name: "screenWidth",
  initialState: window.innerWidth,
  reducers: {
    updateWidth: (state, action) => action.payload,
  },
};

/**la fonction creatSlice renvoie des créateurs d'actions définis dans options, et une tranche du réducteur
 *
 */
const screenWidthSlice = createSlice(options);

/**
 * exporte le créateur d'action updateWith
 */
export const { updateWidth } = screenWidthSlice.actions;
/**
 * exorte la tranche de réduction définie dans la variable options
 */
export const screenWidthReducer = screenWidthSlice.reducer;
