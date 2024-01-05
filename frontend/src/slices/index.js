// blogsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { blogApi } from "../api";

// Async thunk for fetching blogs
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await blogApi.get(
    "api/articles?filters[category][$eq]=popular"
  );
  return response.data;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
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
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default blogsSlice.reducer;
export const { changeLoading } = blogsSlice.actions;
