import { cn } from "@/shared/utils";
import styles from "./styles.module.scss";
import { FC } from "react";
import { PropsWithChildren } from "@/shared/types";

const colors = [
  "purple",
  "medium-blue",
  "light-blue",
  "red",
  "orange",
  "yellow",
  "cyan",
  "light-green",
  "lime",
  "magenta",
  "lightish-red",
  "pink",
];

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={cn(styles.authBg, styles.figure)}>
      {colors.map((color) => (
        <div key={color} className={`${styles.figure} ${styles[color]}`} />
      ))}

      {children}
    </div>
  );
};

export default AuthLayout;
