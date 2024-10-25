import { FC } from "react";
import styles from "./styles.module.scss";
import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";

export const DrawerTitle: FC<MainComponentProps> = ({
  className,
  children,
}) => {
  return <h4 className={cn(styles.root, className)}>{children}</h4>;
};
  