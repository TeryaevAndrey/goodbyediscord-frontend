import {
  AuthRes,
  GetMeRes,
  SignInParams,
  SignUpParams,
  User,
} from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API!}/user_auth`,
  }),

  endpoints: ({ query, mutation }) => ({
    signIn: mutation<AuthRes, SignInParams>({
      query(body) {
        return {
          url: "/login/",
          method: "POST",
          body,
        };
      },
    }),

    signUp: mutation<AuthRes, SignUpParams>({
      query(body) {
        return {
          url: "/register/",
          method: "POST",
          body,
        };
      },
    }),

    getMe: query<GetMeRes, null>({
      query: () => {
        return {
          url: "/me/",
          method: "GET",
          headers: {
            "Authorization": `Bearer ${Cookies.get("access")}`
          },
        };
      },
    }),

    getSession: query<User, null>({
      query: () => {
        return {
          url: "/session/",
          method: "GET",
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useGetMeQuery,
  useLazyGetMeQuery,
  useGetSessionQuery,
} = authApi;
