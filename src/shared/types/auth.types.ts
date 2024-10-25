import { User } from "./users.types";

export type SignInParams = {
  email: string;
  password: string;
};

export type SignUpParams = {
  email: string;
  username: string;
  password: string;
  passwordRepeat: string;
};

export type AuthRes = {
  message: string;
  access: string;
  refresh: string;
  user: User;
};

export type GetMeRes = {
  user: User;
}