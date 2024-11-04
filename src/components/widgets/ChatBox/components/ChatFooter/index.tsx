import { Button, TextField } from "@/components/ui";
import { PropsWithClassName } from "@/shared/types";
import { cn } from "@/shared/utils";
import EmojiPicker, { Theme } from "emoji-picker-react";
import { FC, useState } from "react";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { TiAttachment } from "react-icons/ti";

export const ChatFooter: FC<PropsWithClassName> = ({ className }) => {
  const [isOpenEmoji, setOpenEmoji] = useState(false);

  return (
    <div className={cn("flex items-center gap-2 p-6", className)}>
      <Button mode="square" variant="transparent">
        <TiAttachment className="fill-base-content" size={24} />
      </Button>

      <TextField placeholder="Message..." />

      <div className="relative">
        <Button
          mode="square"
          variant="transparent"
          onClick={() => setOpenEmoji((prev) => !prev)}
        >
          <FaRegFaceSmileBeam className="text-accent" size={20} />
        </Button>

        <EmojiPicker
          className={cn(
            "!absolute bottom-[calc(100%+10px)] right-0 ease-linear !duration-200",
            {
              "pointer-events-none opacity-0": !isOpenEmoji,
              "pointer-events-auto opacity-100": isOpenEmoji,
            }
          )}
          width={300}
          height={350}
          theme={Theme.AUTO}
        />
      </div>

      <Button mode="square" variant="primary">
        <IoIosSend className="text-base-content" size={24} />
      </Button>
    </div>
  );
};
