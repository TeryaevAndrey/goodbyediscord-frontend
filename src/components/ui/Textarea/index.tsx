import { cva, VariantProps } from "class-variance-authority";
import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from "react";
import styles from "./styles.module.scss";
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
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    VariantProps<typeof variants> {}

export const Textarea: FC<Props> = ({
  className,
  variant,
  sizes,
  ...props
}) => {
  return (
    <textarea
      className={cn(variants({ variant, sizes, className }))}
      {...props}
    ></textarea>
  );
};
