import { User } from "./users.types";

export type SignInFormData = {
  email: string;
  password: string;
};

export type SignUpFormData = {
  email: string;
  login: string;
  password: string;
  passwordRepeat: string;
};

export type SignInParams = {
  login: string;
  password: string;
};

export type SignUpParams = {
  login: string;
  email: string;
  password: string;
  name?: string;
};

export type AuthRes = {
  message: string;
  user: User;
};
