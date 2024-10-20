import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";
import { FC } from "react";

export const ChatHeader: FC<MainComponentProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "w-full px-6 py-3 bg-base-200 flex justify-between items-center h-16",
        className
      )}
    >
      {children}
    </div>
  );
};
