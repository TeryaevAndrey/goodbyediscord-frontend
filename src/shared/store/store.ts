import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";
import { authApi, channelsApi, meApi, usersApi } from "./api";

export const store = configureStore({
  reducer: {
    user: userReducer,

    [authApi.reducerPath]: authApi.reducer,
    [meApi.reducerPath]: meApi.reducer,
    [channelsApi.reducerPath]: channelsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      meApi.middleware,
      channelsApi.middleware,
      usersApi.middleware,
    ]),
});
