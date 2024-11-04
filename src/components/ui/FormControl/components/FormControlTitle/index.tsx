import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";
import { FC } from "react";

export const FormControlTitle: FC<MainComponentProps> = ({
  children,
  className,
}) => {
  return <p className={cn("text-sm opacity-50", className)}>{children}</p>;
};
