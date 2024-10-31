import {
  CreateChannelParams,
  CreateChannelRes,
  GetUserChannelsParams,
  GetUserChannelsRes,
  UpdateChannelParams,
  UpdateChannelRes,
} from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const channelsApi = createApi({
  reducerPath: "channelsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API!}/user_channels`,

    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  }),

  tagTypes: ["channels"],

  endpoints: ({ query, mutation }) => ({
    createChannel: mutation<CreateChannelRes, CreateChannelParams>({
      query(body) {
        return {
          url: "/create-channel/",
          body,
          method: "POST",
        };
      },

      invalidatesTags: ["channels"],
    }),

    getUserChannels: query<GetUserChannelsRes, GetUserChannelsParams>({
      query() {
        return {
          url: "/",
          method: "GET",
        };
      },

      providesTags: ["channels"],
    }),

    updateChannel: mutation<UpdateChannelRes, UpdateChannelParams>({
      query(body) {
        return {
          url: `/update/${body.id}/`,
          method: "PUT",
          body,
        };
      },

      invalidatesTags: ["channels"],
    }),
  }),
});

export const { useCreateChannelMutation, useGetUserChannelsQuery, useUpdateChannelMutation } =
  channelsApi;
