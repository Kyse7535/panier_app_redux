import { createSlice } from "@reduxjs/toolkit";

const article = {
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

const sortAscFunc = (state, par) => {
  let change = true;
  while (change) {
    change = false;
    for (let i = 0; i < state.length - 1; i++) {
      if (state[i][par.payload] > state[i + 1][par.payload]) {
        const tmp = state[i];
        state[i] = state[i + 1];
        state[i + 1] = tmp;
        change = true;
      }
    }
  }
  return state;
};
const sortDescFunc = (state, par) => {
  let change = true;
  while (change) {
    change = false;
    for (let i = 0; i < state.length - 1; i++) {
      if (state[i][par.payload] < state[i + 1][par.payload]) {
        const tmp = state[i];
        state[i] = state[i + 1];
        state[i + 1] = tmp;
        change = true;
      }
    }
  }
  return state;
};

const options = {
  name: "article",
  initialState: [article, article2, article3],
  reducers: {
    sortAToZ: (state, par) => sortAscFunc(state, par),
    sortZToA: (state, par) => sortDescFunc(state, par),
    sortPrixAsc: (state, par) => sortAscFunc(state, par),
    sortPrixDesc: (state, par) => sortDescFunc(state, par),
    sortDateAsc: (state, par) => sortAscFunc(state, par),
    sortDateDesc: (state, par) => sortDescFunc(state, par),
  },
};

const articleSlice = createSlice(options);

export const selectListeArticle = (state) => state.listeArticle;

export const {
  sortAToZ,
  sortZToA,
  sortPrixAsc,
  sortPrixDesc,
  sortDateAsc,
  sortDateDesc,
} = articleSlice.actions;
export const allArticleReducer = articleSlice.reducer;
