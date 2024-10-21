import { AuthRes, SignInParams, SignUpParams } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API!}/auth`,
  }),

  endpoints: ({ mutation }) => ({
    signIn: mutation<AuthRes, SignInParams>({
      query: (body) => {
        return {
          url: "/sign-in/",
          method: "POST",
          body,
        };
      },
    }),

    signUp: mutation<AuthRes, SignUpParams>({
      query: (body) => {
        return {
          url: "/sign-up/",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
