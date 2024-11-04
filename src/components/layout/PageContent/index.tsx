import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";
import { FC } from "react";

export const PageContent: FC<MainComponentProps> = ({
  children,
  className,
}) => {
  return <div className={cn("p-4 lg:p-6 w-full", className)}>{children}</div>;
};
