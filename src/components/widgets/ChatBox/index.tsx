import { PropsWithClassName } from "@/shared/types";
import { FC } from "react";
import { ChatFooter, ChatHeader, Messages } from "./components";
import { User } from "./components/ChatHeader/components";

export const ChatBox: FC<PropsWithClassName> = () => {
  return (
    <div className="w-full flex flex-col justify-between">
      <ChatHeader>
        <User /> 
      </ChatHeader>
      
      <Messages />

      <ChatFooter />
    </div>
  );
};
