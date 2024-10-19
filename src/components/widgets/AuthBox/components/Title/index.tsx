import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";
import { FC } from "react";

export const Title: FC<MainComponentProps> = ({ children, className }) => {
  return <h2 className={cn("text-xl lg:text-2xl", className)}>{children}</h2>;
};
