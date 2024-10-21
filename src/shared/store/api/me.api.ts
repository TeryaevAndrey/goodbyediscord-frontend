import { UpdateMeParams, UpdateMeRes } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const meApi = createApi({
  reducerPath: "meApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API!}/me`,
  }),

  endpoints: ({ mutation }) => ({
    updateMe: mutation<UpdateMeRes, UpdateMeParams>({
      query(body) {
        return {
          url: "/",
          method: "PUT",
          body,
        };
      },
    }),
  }),
});

export const { useUpdateMeMutation } = meApi;
