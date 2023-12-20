// store.js
import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../slices/index";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
  },
});

export default store;
