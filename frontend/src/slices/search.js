import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { blogApi } from "../api";

export const searchArticle = createAsyncThunk(
  "search/searchArticle",
  async (q) => {
    const response = await blogApi.get(
      `/api/articles?populate=deep&filters[title][$contains]=${q}`
    );
    return response.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchArticle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(searchArticle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
export const {} = searchSlice.actions;
