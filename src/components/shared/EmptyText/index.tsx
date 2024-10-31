import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";
import { FC } from "react";

export const EmptyText: FC<MainComponentProps> = ({ className, children }) => {
  return <p className={cn("italic text-center w-full", className)}>{children}</p>;
};
