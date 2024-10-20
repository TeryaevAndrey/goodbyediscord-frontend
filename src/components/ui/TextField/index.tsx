import { cva, VariantProps } from "class-variance-authority";
import styles from "./styles.module.scss";
import { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes } from "react";
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

  defaultVariants: {
    variant: "default",
    sizes: "average",
  },
});

interface Props
  extends DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    VariantProps<typeof variants> {}

export const TextField: FC<Props> = forwardRef(
  ({ className, variant, sizes, ...props }, ref) => {
    return (
      <input
        className={cn(variants({ variant, sizes, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

export default TextField;
