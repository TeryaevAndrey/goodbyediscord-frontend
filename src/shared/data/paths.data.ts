import { lazily } from "react-lazily";

const { SignInPage, SignUpPage, PasswordRecoveryPage } = lazily(
  () => import("@/pages/auth")
);

const { HomePage, ChannelPage } = lazily(() => import("@/pages"));

export const paths = {
  auth: {
    signin: {
      path: "/auth/sign-in",
      element: SignInPage,
    },
    signup: {
      path: "/auth/sign-up",
      element: SignUpPage,
    },
    password_recovery: {
      path: "/auth/password-recovery",
      element: PasswordRecoveryPage,
    },
  },

  main: {
    home: {
      path: "/",
      element: HomePage,
    },

    channel: {
      path: "/channel/:id",
      element: ChannelPage,
    },
  },
};
