import { FC } from "react";
import styles from "./styles.module.scss";
import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";

export const DrawerContent: FC<MainComponentProps> = ({
  className,
  children,
}) => {
  return <div className={cn(styles.root, className)}>{children}</div>;
};
