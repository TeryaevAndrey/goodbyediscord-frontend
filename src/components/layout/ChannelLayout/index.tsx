import { FC, useContext } from "react";
import { SecondarySidebar } from "../SecondarySidebar";
import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";
import { Sidebar } from "../Sidebar";
import { ChatBox } from "@/components/widgets";
import { ChannelSidebar } from "../Sidebar/components";
import {
  AddChannelModal,
  AddFriendModal,
  AddMembersChannelModal,
  SettingsModal,
  UserModal,
} from "@/components/modals";
import { ChannelContext } from "@/pages/ChannelPage/shared/contexts";

export const ChannelLayout: FC<MainComponentProps> = ({
  children,
  className,
}) => {
  const { channelData } = useContext(ChannelContext);

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
      <UserModal />
      {channelData && (
        <AddMembersChannelModal
          channelId={channelData.id}
          channelMembers={channelData.members.map((member) => member.id)}
        />
      )}
    </div>
  );
};
