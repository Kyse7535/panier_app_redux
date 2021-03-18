import { configureStore } from "@reduxjs/toolkit";
import { allArticleReducer } from "../features/article/articleSlice";
import { allArticlePanierReducer } from "../features/articleInPanier/articleInPanierSlice";
import { screenWidthReducer } from "../features/screenWidth/ScreenWidthSlice";

const store = configureStore({
  reducer: {
    listeArticle: allArticleReducer,
    allArticlePanier: allArticlePanierReducer,
    screenWidth: screenWidthReducer,
  },
});

export default store;
