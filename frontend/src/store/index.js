// store.js
import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../slices/index";
import articleReducer from "../slices/article";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    article: articleReducer,
  },
});

export default store;
