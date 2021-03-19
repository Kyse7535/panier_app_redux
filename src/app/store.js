import { configureStore } from "@reduxjs/toolkit";
import { allArticleReducer } from "../features/article/articleSlice";
import { allArticlePanierReducer } from "../features/articleInPanier/articleInPanierSlice";
import { screenWidthReducer } from "../features/screenWidth/ScreenWidthSlice";
import { articleQuantiteReducer } from "../features/produit/produitSlice";
import { searchTermReducer } from "../features/recherche/RechercheSlice";
const store = configureStore({
  reducer: {
    listeArticle: allArticleReducer,
    allArticlePanier: allArticlePanierReducer,
    screenWidth: screenWidthReducer,
    articleQuantite: articleQuantiteReducer,
    searchTerm: searchTermReducer,
  },
});

export default store;
