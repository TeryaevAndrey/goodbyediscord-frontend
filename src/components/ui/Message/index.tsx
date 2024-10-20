import { cn } from "@/shared/utils";
import { FC } from "react";

type Props = {
  position: "left" | "right";
  time: string;
  message: string;
  isViewed?: boolean;
  name: string;
};

export const Message: FC<Props> = ({
  position,
  time,
  message,
  isViewed = false,
  name,
}) => {
  return (
    <div
      className={cn("chat", {
        "chat-start": position === "left",
        "chat-end": position === "right",
      })}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>

      <div className="chat-header">
        {name}
        <time className="text-xs opacity-50 ml-1">{time}</time>
      </div>
      <div className="chat-bubble mt-1">{message}</div>
      <div className="chat-footer opacity-50">
        {isViewed ? "Viewed" : "Not Viewed"}
      </div>
    </div>
  );
};
