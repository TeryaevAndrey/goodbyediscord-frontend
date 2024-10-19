import { cva, VariantProps } from "class-variance-authority";
import styles from "./styles.module.scss";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { cn } from "@/shared/utils";

const variants = cva(styles.root, {
  variants: {
    variant: {
      default: styles.default,
      success: styles.success,
      error: styles.error,
    },

    sizes: {
      small: styles.small,
      average: styles.average,
      big: styles.big,
    },
  },
});

interface Props
  extends DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    VariantProps<typeof variants> {}

export const TextField: FC<Props> = ({
  className,
  variant,
  sizes,
  ...props
}) => {
  return (
    <input className={cn(variants({ variant, sizes, className }))} {...props} />
  );
};

export default TextField;
