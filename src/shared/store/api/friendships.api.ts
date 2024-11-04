import {
  AcceptFriendship,
  Friendship,
  FriendshipInvite,
  GetFriendshipsRes,
} from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const friendshipsApi = createApi({
  reducerPath: "friendshipsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API!}/friendships`,
  }),

  tagTypes: ["friendships"],

  endpoints: ({ query, mutation }) => ({
    inviteFriendship: mutation<Friendship, FriendshipInvite>({
      query(body) {
        return {
          url: "/invite/",
          method: "POST",
          body,
          headers: {
            Authorization: `Bearer ${Cookies.get("access")}`,
          },
        };
      },
    }),

    acceptfriendship: mutation<Friendship, AcceptFriendship>({
      query(body) {
        return {
          url: "/accept/",
          method: "POST",
          body,
          headers: {
            Authorization: `Bearer ${Cookies.get("access")}`,
          },
        };
      },

      invalidatesTags: ["friendships"],
    }),

    getFriendships: query<GetFriendshipsRes, null>({
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

export const {
  useInviteFriendshipMutation,
  useAcceptfriendshipMutation,
  useGetFriendshipsQuery,
} = friendshipsApi;
