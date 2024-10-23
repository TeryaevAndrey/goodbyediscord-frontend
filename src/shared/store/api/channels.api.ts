import {
  CreateChannelParams,
  CreateChannelRes,
  GetUserChannelsParams,
  GetUserChannelsRes,
} from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const channelsApi = createApi({
  reducerPath: "channelsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API!}/user_channels`,
  }),

  tagTypes: ["channels"],

  endpoints: ({ query, mutation }) => ({
    createChannel: mutation<CreateChannelRes, CreateChannelParams>({
      query(body) {
        return {
          url: "/create/",
          method: "POST",
          body,
          credentials: "include",
        };
      },
    }),

    getUserChannels: query<GetUserChannelsRes, GetUserChannelsParams>({
      query() {
        return {
          url: "/",
          method: "GET",
          credentials: "include",
        };
      },
    }),
  }),
});

export const { useCreateChannelMutation, useGetUserChannelsQuery } =
  channelsApi;
