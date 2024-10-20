import { PropsWithClassName } from "@/shared/types";
import { FC } from "react";
import { ChatFooter, ChatHeader, Messages } from "./components";
import { User } from "./components/ChatHeader/components";
import { Button } from "@/components/ui";
import { IoSearch } from "react-icons/io5";

export const ChatBox: FC<PropsWithClassName> = () => {
  return (
    <div className="flex w-full">
      <div className="w-full flex flex-col">
        <ChatHeader>
          <User />

          <Button mode="square" variant="transparent">
            <IoSearch className="text-base-content" size={24} />
          </Button>
        </ChatHeader>

        <Messages />

        <ChatFooter className="mt-auto" />
      </div>

      <div className="w-[400px] bg-base-300"></div>
    </div>
  );
};
