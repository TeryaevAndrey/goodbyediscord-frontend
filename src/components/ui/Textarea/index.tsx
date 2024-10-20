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
});

interface Props
  extends DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    VariantProps<typeof variants> {}

export const Textarea: FC<Props> = ({ className, variant, sizes }) => {
  return (
    <textarea
      className={cn(variants({ variant, sizes, className }))}
      placeholder="Bio"
    ></textarea>
  );
};
