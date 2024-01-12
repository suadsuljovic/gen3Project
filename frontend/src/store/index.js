// store.js
import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../slices/index";
import articleReducer from "../slices/article";
import categoryReducer from "../slices/group";
import searchReducer from "../slices/search";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    article: articleReducer,
    category: categoryReducer,
    search: searchReducer,
  },
});

export default store;
