import {
  Channel,
  CreateChannelParams,
  CreateChannelRes,
  getChannelByIdParams,
  GetUserChannelsParams,
  GetUserChannelsRes,
  UpdateChannelParams,
  UpdateChannelRes,
  User,
} from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

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
          url: "/create-channel/",
          body,
          method: "POST",
          headers: {
            Authorization: `Bearer ${Cookies.get("access")}`,
          },
        };
      },

      invalidatesTags: ["channels"],
    }),

    getUserChannels: query<GetUserChannelsRes, GetUserChannelsParams>({
      query() {
        return {
          url: "/",
          method: "GET",
          headers: {
            Authorization: `Bearer ${Cookies.get("access")}`,
          },
        };
      },

      providesTags: ["channels"],
    }),

    getChannelById: query<Channel<User>, getChannelByIdParams>({
      query(params) {
        return {
          url: `/${params.id}/`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${Cookies.get("access")}`,
          },
        };
      },
    }),

    updateChannel: mutation<UpdateChannelRes, UpdateChannelParams>({
      query(body) {
        return {
          url: `/update/${body.id}/`,
          method: "PUT",
          body,
          headers: {
            Authorization: `Bearer ${Cookies.get("access")}`,
          },
        };
      },

      invalidatesTags: ["channels"],
    }),
  }),
});

export const {
  useCreateChannelMutation,
  useGetUserChannelsQuery,
  useGetChannelByIdQuery,
  useUpdateChannelMutation,
} = channelsApi;
