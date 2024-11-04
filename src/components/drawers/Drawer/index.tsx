import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styles from "./styles.module.scss";
import { MainComponentProps } from "@/shared/types";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils";

const variants = cva(styles.root, {
  variants: {
    type: {
      floating: styles.floating,
      fixed: styles.fixed,
    },
    direction: {
      left: styles.left,
      right: styles.right,
    },

    sizes: {
      small: styles.small,
      average: styles.average,
      big: styles.big,
    },
  },

  defaultVariants: {
    type: "floating",
    direction: "right",
    sizes: "average",
  },
});

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    VariantProps<typeof variants> {
  isOpen: boolean;
}

export const Drawer: FC<MainComponentProps<Props>> = ({
  className,
  children,
  type,
  direction,
  sizes,
  isOpen = false,
}) => {
  return (
    <div
      className={cn(variants({ type, direction, sizes }), className, {
        isOpen,
      })}
    >
      {children}
    </div>
  );
};
