import {
  ActiveChatUser,
  BackButton,
  Button,
  Search,
  TextChat,
  VoiceChat,
} from "@/components/ui";
import { useNavigate } from "react-router-dom";
import { ChatWrapper } from "../ChatWrapper";
import { ChatUsersList } from "../ChatUsersList";

export const ChannelSidebar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mx-4 flex flex-col gap-4">
        <BackButton onClick={() => navigate("/")} />

        <Button
          sizes="small"
          onClick={() =>
            document.getElementById("add_friend_modal")?.showModal()
          }
        >
          Добавить друга
        </Button>
        <Search />
      </div>

      <div className="flex flex-col gap-6 mt-6 overflow-y-auto h-full max-h-[calc(100dvh-190px)]">
        <div className="flex flex-col">
          <p className="text-sm text-base-content/50 px-6 mb-2">
            Голосовые чаты
          </p>

          <ChatWrapper>
            <VoiceChat />

            <ChatUsersList>
              <ActiveChatUser />
              <ActiveChatUser />
              <ActiveChatUser />
              <ActiveChatUser />
            </ChatUsersList>
          </ChatWrapper>
          <VoiceChat />
          <VoiceChat />
          <VoiceChat />
          <VoiceChat />
          <ChatWrapper>
            <VoiceChat />

            <ChatUsersList>
              <ActiveChatUser />
              <ActiveChatUser />
              <ActiveChatUser />
              <ActiveChatUser />
            </ChatUsersList>
          </ChatWrapper>
        </div>

        <div className="flex flex-col">
          <p className="text-sm text-base-content/50 px-6 mb-2">
            Текстовые чаты
          </p>

          <TextChat />
          <TextChat />
          <ChatWrapper>
            <TextChat />

            <ChatUsersList>
              <ActiveChatUser />
              <ActiveChatUser />
              <ActiveChatUser />
            </ChatUsersList>
          </ChatWrapper>
          <TextChat />
          <TextChat />
          <TextChat />
          <ChatWrapper>
            <TextChat />

            <ChatUsersList>
              <ActiveChatUser />
              <ActiveChatUser />
              <ActiveChatUser />
            </ChatUsersList>
          </ChatWrapper>
        </div>
      </div>
    </div>
  );
};
