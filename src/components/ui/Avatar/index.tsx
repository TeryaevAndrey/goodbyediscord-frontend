import { cva, VariantProps } from "class-variance-authority";
import styles from "./styles.module.scss";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { cn } from "@/shared/utils";

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
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    VariantProps<typeof variants> {}

export const Avatar: FC<Props> = ({ className, sizes }) => {
  return (
    <div className={cn(variants({ sizes }), className)}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
      </div>
    </div>
  );
};
