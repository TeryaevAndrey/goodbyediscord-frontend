import { FC } from "react";
import { SecondarySidebar } from "../SecondarySidebar";
import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";
import { Sidebar } from "../Sidebar";

export const MainLayout: FC<MainComponentProps> = ({ children, className }) => {
  return (
    <div className={cn("flex", className)}>
      <SecondarySidebar />
      <Sidebar></Sidebar>

      {children}
    </div>
  );
};
