import { RiVoiceprintLine } from "react-icons/ri";

export const VoiceChat = () => {
  return (
    <div className="px-6 py-1 flex items-center justify-between gap-2 bg-base-200/50 hover:bg-base-200 ease-linear duration-200 cursor-pointer active:bg-base-200/90">
      <span className="text-base">Чатикс 1</span>
      <RiVoiceprintLine />
    </div>
  );
};
