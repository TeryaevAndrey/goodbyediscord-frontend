import { PropsWithClassName } from "@/shared/types";
import { cn } from "@/shared/utils";
import { FC } from "react";

export const Loader: FC<PropsWithClassName> = ({ className }) => {
  return (
    <span
      className={cn("loading loading-bars loading-lg mx-auto", className)}
    ></span>
  );
};
