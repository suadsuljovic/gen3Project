// store.js
import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../slices/index";
import articleReducer from "../slices/article";
import categoryReducer from "../slices/group";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    article: articleReducer,
    category: categoryReducer,
  },
});

export default store;
