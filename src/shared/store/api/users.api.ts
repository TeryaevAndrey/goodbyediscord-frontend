import { SearchUsersParams, SearchUsersRes } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

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
          headers: {
            Authorization: `Bearer ${Cookies.get("access")}`,
          },
        };
      },
    }),
  }),
});

export const { useSearchUsersQuery } = usersApi;
