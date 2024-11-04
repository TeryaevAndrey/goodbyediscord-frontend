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
      extraBig: styles.extraBig,
    },
  },

  defaultVariants: {
    sizes: "average",
  },
});

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    VariantProps<typeof variants> {
  url?: string;
  letter?: string;
}

export const Avatar: FC<Props> = ({ className, sizes, url, letter }) => {
  return (
    <div className={cn(variants({ sizes }), className)}>
      <div className={styles.imgWrapper}>
        {url ? <img className={styles.img} src={url} /> : letter}
      </div>
    </div>
  );
};
