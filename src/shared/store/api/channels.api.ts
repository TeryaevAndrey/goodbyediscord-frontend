import {
  CreateChannelParams,
  CreateChannelRes,
  GetUserChannelsParams,
  GetUserChannelsRes,
} from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const channelsApi = createApi({
  reducerPath: "channelsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API!}/channels`,
  }),

  tagTypes: ["channels"],

  endpoints: ({ query, mutation }) => ({
    createChannel: mutation<CreateChannelRes, CreateChannelParams>({
      query(body) {
        return {
          url: "/",
          method: "POST",
          body,
          credentials: "include",
          headers: {
            "X-CSRFToken": Cookies.get('csrftoken')
          }
        };
      },

      invalidatesTags: ["channels"],
    }),

    getUserChannels: query<GetUserChannelsRes, GetUserChannelsParams>({
      query() {
        return {
          url: "/list/",
          method: "GET",
          credentials: "include",
        };
      },

      providesTags: ["channels"],
    }),
  }),
});

export const { useCreateChannelMutation, useGetUserChannelsQuery } =
  channelsApi;
