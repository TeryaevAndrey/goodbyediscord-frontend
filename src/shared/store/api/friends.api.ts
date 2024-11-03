import { GetFriendsRes } from "@/shared/types/friends.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const friendsApi = createApi({
  reducerPath: "friendsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API!}/friends`,
  }),

  tagTypes: ["friends"],

  endpoints: ({ query }) => ({
    getFriends: query<GetFriendsRes, null>({
      query() {
        return {
          url: "/",
          method: "GET",
          headers: {
            Authorization: `Bearer ${Cookies.get("access")}`,
          },
        };
      },
    }),
  }),
});

export const { useGetFriendsQuery } = friendsApi;
