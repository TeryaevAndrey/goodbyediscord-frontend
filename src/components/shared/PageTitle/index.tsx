import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";
import { FC } from "react";

export const PageTitle: FC<MainComponentProps> = ({ children, className }) => {
  return (
    <h1 className={cn("text-xl md:text-2xl mb-4 lg:mb-6", className)}>
      {children}
    </h1>
  );
};
