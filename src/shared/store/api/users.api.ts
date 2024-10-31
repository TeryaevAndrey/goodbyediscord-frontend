import { SearchUsersParams, SearchUsersRes } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API!}/users`,
  }),

  endpoints: ({ query }) => ({
    searchUsers: query<SearchUsersRes, SearchUsersParams>({
      query(params) {
        return {
          url: "/search/",
          method: "GET",
          params,
        };
      },
    }),
  }),
});

export const { useSearchUsersQuery } = usersApi;
