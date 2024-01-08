import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { blogApi } from "../api";

export const fetchArticle = createAsyncThunk(
  "article/fetchArticle",
  async (id) => {
    const response = await blogApi.get(`/api/articles/${id}?populate=deep`);
    return response.data;
  }
);

const articleSlice = createSlice({
  name: "article",
  initialState: {
    article: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.article = action.payload;
      })
      .addCase(fetchArticle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default articleSlice.reducer;
export const {} = articleSlice.actions;
