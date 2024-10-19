import { FC } from "react";
import styles from "./styles.module.scss";
import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";

export const AuthBox: FC<MainComponentProps> = ({ children, className }) => {
  return <div className={cn(styles.root, className)}>{children}</div>;
};
