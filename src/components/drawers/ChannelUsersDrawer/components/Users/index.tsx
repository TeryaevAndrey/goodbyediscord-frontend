import { FC } from "react";
import styles from "./styles.module.scss";
import { cn } from "@/shared/utils";
import { PropsWithClassName } from "@/shared/types";
import { User } from "@/components/ui";

export const Users: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <User sizes="small" />
      <User sizes="small" />
      <User sizes="small" />
      <User sizes="small" />
      <User sizes="small" />
      <User sizes="small" />
    </div>
  );
};
