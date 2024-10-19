import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";
import { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Title: FC<MainComponentProps<Props>> = ({
  tag,
  children,
  className,
}) => {
  const Tag = tag;

  return <Tag className={cn(styles.root, className)}>{children}</Tag>;
};
