import {
  BackButton,
  Button,
  Search,
  TextChat,
  VoiceChat,
} from "@/components/ui";
import { useNavigate } from "react-router-dom";

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

      <div className="flex flex-col gap-6 mt-6 overflow-y-auto h-full max-h-[calc(100dvh-95px)]">
        <div className="flex flex-col">
          <p className="text-sm text-base-content/50 px-6 mb-2">
            Голосовые чаты
          </p>

          <VoiceChat />
          <VoiceChat />
          <VoiceChat />
          <VoiceChat />
          <VoiceChat />
          <VoiceChat />
        </div>

        <div className="flex flex-col">
          <p className="text-sm text-base-content/50 px-6 mb-2">
            Текстовые чаты
          </p>

          <TextChat />
          <TextChat />
          <TextChat />
          <TextChat />
          <TextChat />
          <TextChat />
          <TextChat />
        </div>
      </div>
    </div>
  );
};
