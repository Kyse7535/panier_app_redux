export const loadStore = () => {
  try {
    const store = window.localStorage.getItem("store");
    if (store === null) {
      return undefined;
    }
    return JSON.parse(store);
  } catch (error) {
    return undefined;
  }
};

export const saveStore = (store) => {
  try {
    window.localStorage.setItem("store", JSON.stringify(store));
  } catch (error) {}
};
