import { lazily } from "react-lazily";

const { SignInPage } = lazily(() => import("@/pages/auth"));

export const paths = {
  auth: {
    signin: {
      path: "/auth/sign-in",
      element: SignInPage,
    },
    signup: {
      path: "/auth/sign-up",
    },
    password_recovery: {
      path: "/auth/password-recovery",
    },
  },
};
