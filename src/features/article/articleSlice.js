import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/*const article = {
  id: 1,
  titre: "Ordinateur-portable1, 2e version",
  image: "/ordi.jpg",
  prix: 399,
  description: "Description",
  datePublication: new Date(2020, 1).toString(),
};

const article2 = {
  id: 2,
  titre: "Ordinateur-portable2, 3e version",
  image: "/ordi.jpg",
  prix: 599,
  description: "Description",
  datePublication: new Date(2021, 3).toString(),
};
const article3 = {
  id: 3,
  titre: "Ordinateur-portable3, 1ere version",
  image: "/ordi.jpg",
  prix: 499,
  description: "Description",
  datePublication: new Date(2019, 1).toString(),
};
*/

/**
 *
 * @param {object[]} state
 * @param {String} par
 * @returns retourne le tableau state trié dans l'ordre en fonction de la variable par saisie.
 * la variable par peut-etre (trier A à Z, prix asc , moins récent)
 */
const sortAscFunc = (state, par) => {
  let change = true;
  while (change) {
    change = false;
    for (let i = 0; i < state.items.length - 1; i++) {
      if (state.items[i][par.payload] > state.items[i + 1][par.payload]) {
        const tmp = state.items[i];
        state.items[i] = state.items[i + 1];
        state.items[i + 1] = tmp;
        change = true;
      }
    }
  }
  return state;
};

/**
 *
 * @param {object[]} state
 * @param {String} par
 * @returns retourne le tableau state trié dans l'ordre en fonction de la variable par saisie.
 * la variable par peut-etre (trier Z à A, prix desc , plus récent)
 */
const sortDescFunc = (state, par) => {
  let change = true;
  while (change) {
    change = false;
    for (let i = 0; i < state.items.length - 1; i++) {
      if (state.items[i][par.payload] < state.items[i + 1][par.payload]) {
        const tmp = state.items[i];
        state.items[i] = state.items[i + 1];
        state.items[i + 1] = tmp;
        change = true;
      }
    }
  }
  return state;
};

/**
 * Recupére des articles de l'api fakestoreapi
 */
export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );
    const articles = await response.json();
    return articles;
  }
);

/**
 * cette variable permet de définir le nom de la tranche de réduction, initialiser son state,
 * et creer des créateurs d'actions définis dans reducers
 */
const options = {
  name: "article",
  initialState: {
    items: [],
    status: "inactif",
    error: null,
  },
  reducers: {
    sortAToZ: (state, par) => sortAscFunc(state, par),
    sortZToA: (state, par) => sortDescFunc(state, par),
    sortPrixAsc: (state, par) => sortAscFunc(state, par),
    sortPrixDesc: (state, par) => sortDescFunc(state, par),
    sortDateAsc: (state, par) => sortAscFunc(state, par),
    sortDateDesc: (state, par) => sortDescFunc(state, par),
  },
  extraReducers: {
    [fetchArticles.pending]: (state) => {
      state.status = "loading";
    },
    [fetchArticles.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [fetchArticles.rejected]: (state) => {
      state.status = "failed";
    },
  },
};

/**
 * la fonction creatSlice renvoie des créateurs d'actions définis dans options, et une tranche du réducteur
 *
 */
const articleSlice = createSlice(options);

/**
 * exporte le créateur d'action défini dans la variable options
 */
export const {
  sortAToZ,
  sortZToA,
  sortPrixAsc,
  sortPrixDesc,
  sortDateAsc,
  sortDateDesc,
} = articleSlice.actions;
export const allArticleReducer = articleSlice.reducer;
