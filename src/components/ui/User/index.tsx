import { cn } from "@/shared/utils";
import styles from "./styles.module.scss";
import { cva, VariantProps } from "class-variance-authority";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { Avatar } from "../Avatar";

const variants = cva(styles.root, {
  variants: {
    sizes: {
      small: styles.small,
      average: styles.average,
      big: styles.big,
    },
  },

  defaultVariants: {
    sizes: "average",
  },
});

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    VariantProps<typeof variants> {}

export const User: FC<Props> = ({ sizes }) => {
  return (
    <div className={cn(variants({ sizes }))}>
      <Avatar sizes={sizes} />

      <div className={styles.mainInfo}>
        <h6 className={styles.title}>Имя</h6>
        <p className={styles.text}>Description</p>
      </div>
    </div>
  );
};
