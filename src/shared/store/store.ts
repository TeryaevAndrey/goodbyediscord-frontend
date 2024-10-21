import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";
import { authApi, meApi } from "./api";

export const store = configureStore({
  reducer: {
    user: userReducer,

    [authApi.reducerPath]: authApi.reducer,
    [meApi.reducerPath]: meApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, meApi.middleware]),
});
