import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  userLoadingStatus: "idle",
  errorMessage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogging: (state) => {
      state.userLoadingStatus = "loading";
    },
    userLogged: (state, action) => {
      state.userLoadingStatus = "idle";
      state.user = action.payload;
    },
    userLoggingError: (state, action) => {
      state.userLoadingStatus = "error";
      state.errorMessage = action.payload;
    },
    userLogOut: (state) => {
      state.user = {};
    },
    userChangeInfo: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

const { actions, reducer } = userSlice;
export default reducer;

export const {
  userLogging,
  userLogged,
  userLoggingError,
  userLogOut,
  userChangeInfo,
} = actions;
