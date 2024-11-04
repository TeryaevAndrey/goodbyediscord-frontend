import { cn } from "@/shared/utils";
import styles from "./styles.module.scss";
import { cva, VariantProps } from "class-variance-authority";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { Avatar } from "../Avatar";

const variants = cva(styles.root, {
  variants: {
    variant: {
      pointer: styles.pointer,
    },

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
    VariantProps<typeof variants> {
  userId: number;
  name: string;
  avatarUrl?: string;
}

export const User: FC<Props> = ({
  variant,
  sizes,
  userId,
  name,
  avatarUrl,
  ...props
}) => {
  return (
    <div className={cn(variants({ sizes, variant }))} {...props}>
      <Avatar sizes={sizes} url={avatarUrl} letter={name[0]} />

      <div className={styles.mainInfo}>
        <h6 className={styles.title}>{name}</h6>
        <p className={styles.text}>#{userId}</p>
      </div>
    </div>
  );
};
