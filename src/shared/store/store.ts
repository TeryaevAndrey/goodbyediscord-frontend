import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";
import {
  authApi,
  channelsApi,
  friendsApi,
  friendshipsApi,
  meApi,
  usersApi,
} from "./api";

export const store = configureStore({
  reducer: {
    user: userReducer,

    [authApi.reducerPath]: authApi.reducer,
    [meApi.reducerPath]: meApi.reducer,
    [channelsApi.reducerPath]: channelsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [friendsApi.reducerPath]: friendsApi.reducer,
    [friendshipsApi.reducerPath]: friendshipsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      meApi.middleware,
      channelsApi.middleware,
      usersApi.middleware,
      friendsApi.middleware,
      friendshipsApi.middleware,
    ]),
});
