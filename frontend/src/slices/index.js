// blogsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { blogApi } from "../api";

// Async thunk for fetching blogs
export const fetchPopularBlogs = createAsyncThunk(
  "blogs/fetchPopularBlogs",
  async () => {
    const response = await blogApi.get(
      "/api/articles?populate=category,cover&filters[category][slug][$eq]=popular"
    );
    return response.data;
  }
);

export const fetchNatureBlogs = createAsyncThunk(
  "blogs/fetchNatureBlogs",
  async () => {
    const response = await blogApi.get(
      "/api/articles?populate=category,cover&filters[category][slug][$eq]=nature"
    );
    return response.data;
  }
);

export const fetchNewsBlogs = createAsyncThunk(
  "blogs/fetchNewsBlogs",
  async () => {
    const response = await blogApi.get(
      "/api/articles?populate=category,cover&filters[category][slug][$eq]=news"
    );
    return response.data;
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    popularBlogs: [],
    natureBlogs: [],
    newsBlogs: [],
    status: "idle",
    error: null,
  },
  reducers: {
    changeLoading: (state) => {
      state.status = "loading";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopularBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.popularBlogs = action.payload;
      })
      .addCase(fetchPopularBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchNatureBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNatureBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.natureBlogs = action.payload;
      })
      .addCase(fetchNatureBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchNewsBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewsBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.newsBlogs = action.payload;
      })
      .addCase(fetchNewsBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default blogsSlice.reducer;
export const { changeLoading } = blogsSlice.actions;
