import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";
import { FC } from "react";

export const FormControl: FC<MainComponentProps> = ({
  children,
  className,
}) => {
  return <div className={cn("flex flex-col gap-1", className)}>{children}</div>;
};
