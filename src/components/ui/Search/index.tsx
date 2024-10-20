import { cn } from "@/shared/utils";
import { cva, VariantProps } from "class-variance-authority";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

const variants = cva("input input-bordered flex items-center gap-2", {
  variants: {
    variant: {
      success: "input-success",
      error: "input-error",
    },

    sizes: {
      small: "input-sm",
      average: "input-md",
      big: "input-lg",
    },
  },

  defaultVariants: {
    sizes: "average",
  },
});

interface Props
  extends DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    VariantProps<typeof variants> {}

export const Search: FC<Props> = ({ className, variant, sizes, ...props }) => {
  return (
    <label className={cn(variants({ variant, sizes, className }))}>
      <input type="text" placeholder="Search..." className="grow" {...props} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    </label>
  );
};
