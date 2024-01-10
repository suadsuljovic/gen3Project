import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { blogApi } from "../api";
import { CategoryIds } from "../utils";

export const fetchGroup = createAsyncThunk("group/fetchGroup", async (id) => {
  const response = await blogApi.get(
    `/api/categories/${CategoryIds[id]}?populate=deep`
  );
  return response.data;
});

const groupSlice = createSlice({
  name: "group",
  initialState: {
    category: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGroup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.category = action.payload;
      })
      .addCase(fetchGroup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default groupSlice.reducer;
export const {} = groupSlice.actions;
