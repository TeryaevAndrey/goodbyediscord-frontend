import { ReactNode } from "react";

export type PropsWithClassName<T = unknown> = T & {
  className?: string;
};

export type PropsWithChildren<T = unknown> = T & {
  children?: ReactNode;
};

export type MainComponentProps<T = unknown> = T &
  PropsWithClassName &
  PropsWithChildren;

export type Themes = "dark" | "light";

export type ErrorRes<T = unknown> = { error: string } & T;
