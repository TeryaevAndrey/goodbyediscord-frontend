import { FC } from "react";
import { SecondarySidebar } from "../SecondarySidebar";
import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";
import { Sidebar } from "../Sidebar";
import { ChatBox } from "@/components/widgets";
import { ChannelSidebar } from "../Sidebar/components";
import { AddChannelModal, AddFriendModal, SettingsModal } from "@/components/modals";

export const ChannelLayout: FC<MainComponentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex overflow-y-hidden", className)}>
      <SecondarySidebar />
      <Sidebar>
        <ChannelSidebar />
      </Sidebar>

      <ChatBox />

      {children}

      <AddFriendModal />
      <AddChannelModal />
      <SettingsModal />
    </div>
  );
};
