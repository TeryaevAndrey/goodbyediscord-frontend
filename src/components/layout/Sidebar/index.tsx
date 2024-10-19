import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";
import { FC } from "react";

export const Sidebar: FC<MainComponentProps> = ({ children, className }) => {
  return (
    <div className={cn("lg:min-w-[300px] bg-base-300", className)}>
      {children}
    </div>
  );
};
