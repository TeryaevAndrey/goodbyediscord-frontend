import { User } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API!}/auth`,
  }),

  endpoints: ({ query }) => ({
    getMe: query<User, null>({
      query: () => {
        return {
          url: "/user/",
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),

    getSession: query<User, null>({
      query: () => {
        return {
          url: "/session/",
          method: "GET",
          credentials: "include",
        };
      },
    }),
  }),
});

export const { useGetMeQuery, useLazyGetMeQuery, useGetSessionQuery } = authApi;
