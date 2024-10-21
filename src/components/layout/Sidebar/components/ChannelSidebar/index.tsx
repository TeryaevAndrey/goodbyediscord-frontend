import { Button, Search, VoiceChat } from "@/components/ui";

export const ChannelSidebar = () => {
  return (
    <div>
      <div className="mx-4 flex flex-col gap-4">
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

      <div className="flex flex-col mt-6 overflow-y-auto h-full max-h-[calc(100dvh-95px)]">
        <div className="flex flex-col">
          <p className="text-sm text-base-content/50 px-6 mb-2">Голосовые чаты</p>

          <VoiceChat />
          <VoiceChat />
          <VoiceChat />
          <VoiceChat />
          <VoiceChat />
          <VoiceChat />
        </div>
      </div>
    </div>
  );
};
