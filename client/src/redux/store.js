import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./ItemSlice";
/*Learned from https://redux-toolkit.js.org/tutorials/quick-start */
export const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
  },
});
export default store;
