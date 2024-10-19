import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";
import { FC } from "react";

export const FormControlError: FC<MainComponentProps> = ({
  children,
  className,
}) => {
  return <p className={cn("text-error text-xs", className)}>{children}</p>;
};
