import { FC } from "react";
import { SecondarySidebar } from "../SecondarySidebar";
import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";
import { Sidebar } from "../Sidebar";
import { UserSidebar } from "../Sidebar/components";

export const MainLayout: FC<MainComponentProps> = ({ children, className }) => {
  return (
    <div className={cn("flex overflow-y-hidden", className)}>
      <SecondarySidebar />
      <Sidebar>
        <UserSidebar />
      </Sidebar>

      {children}
    </div>
  );
};
