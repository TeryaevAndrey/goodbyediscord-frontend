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
import { IoIosAdd } from "react-icons/io";
import { openModal } from "@/shared/utils";

export const ChannelSidebar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mx-4 flex flex-col gap-4">
        <BackButton onClick={() => navigate("/")} />

        <Button
          sizes="small"
          onClick={() =>
            document.getElementById("add_members_channel_modal")?.showModal()
          }
        >
          Добавить участника
        </Button>
        <Search />
      </div>

      <div className="flex flex-col gap-6 mt-6 overflow-y-auto h-full max-h-[calc(100dvh-190px)]">
        <div className="flex flex-col">
          <div className="mb-2 px-4 flex justify-between items-center">
            <p className="text-sm text-base-content/50">Голосовые чаты</p>

            <button
              title="Добавить голосовой чат"
              onClick={() => openModal("add_channel_chat_modal")}
            >
              <IoIosAdd className="fill-base-content" size={18} />
            </button>
          </div>

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
          <div className="mb-2 px-4 flex justify-between items-center">
            <p className="text-sm text-base-content/50">Текстовые чаты</p>

            <button
              title="Добавить голосовой чат"
              onClick={() => openModal("add_channel_chat_modal")}
            >
              <IoIosAdd className="fill-base-content" size={18} />
            </button>
          </div>

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
