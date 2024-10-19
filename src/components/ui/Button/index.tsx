import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import styles from "./styles.module.scss";
import { cn } from "@/shared/utils";

const variants = cva(styles.root, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      transparent: styles.transparent,
    },

    sizes: {
      small: styles.small,
      average: styles.average,
      big: styles.big,
    },

    mode: {
      square: styles.square,
    },
  },

  defaultVariants: {
    variant: "primary",
    sizes: "average",
  },
});

interface Props
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    VariantProps<typeof variants> {}

export const Button: FC<Props> = ({
  children,
  className,
  variant,
  sizes,
  mode,
  ...props
}) => {
  return (
    <button
      className={cn(variants({ variant, sizes, mode, className }))}
      {...props}
    >
      {children}
    </button>
  );
};
