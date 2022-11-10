import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

const newsAdapter = createEntityAdapter();
const initialState = newsAdapter.getInitialState({
  newsLoadingStatus: "idle",
});

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  return await axios.get("http://localhost:3001/news");
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.newsLoadingStatus = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.newsLoadingStatus = "idle";
        newsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchNews.rejected, (state) => {
        state.newsLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { reducer } = newsSlice;
export default reducer;

export const { selectAll } = newsAdapter.getSelectors((state) => state.news);
