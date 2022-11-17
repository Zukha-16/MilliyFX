import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
  newsLoadingStatus: "idle",

  comments: [],
  commentsLoadingStatus: "idle",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    newsFetching: (state) => {
      state.newsLoadingStatus = "loading";
    },
    newsFetched: (state, action) => {
      state.news = action.payload;
      state.newsLoadingStatus = "idle";
    },
    newsFetchingError: (state) => {
      state.newsLoadingStatus = "error";
    },

    commentsFetching: (state) => {
      state.commentsLoadingStatus = "loading";
    },
    commentsFetched: (state, action) => {
      state.comments = action.payload;
      state.commentsLoadingStatus = "idle";
    },
    commentsFetchingError: (state) => {
      state.commentsLoadingStatus = "error";
    },

    commentCreated: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});

const { actions, reducer } = newsSlice;
export default reducer;

export const {
  newsFetching,
  newsFetched,
  newsFetchingError,
  commentsFetching,
  commentsFetched,
  commentsFetchingError,
  commentCreated
} = actions;
