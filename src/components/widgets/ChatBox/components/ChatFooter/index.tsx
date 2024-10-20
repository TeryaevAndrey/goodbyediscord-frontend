import { Button, TextField } from "@/components/ui";
import { PropsWithClassName } from "@/shared/types";
import { cn } from "@/shared/utils";
import { FC } from "react";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { TiAttachment } from "react-icons/ti";

export const ChatFooter: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-2 pb-8 px-6", className)}>
      <Button mode="square" variant="transparent">
        <TiAttachment className="fill-base-content" size={24} />
      </Button>

      <TextField placeholder="Message..." />

      <div className="relative">
        <Button mode="square" variant="transparent">
          <FaRegFaceSmileBeam className="text-accent" size={20} />
        </Button>
      </div>

      <Button mode="square" variant="primary">
        <IoIosSend className="text-base-content" size={24} />
      </Button>
    </div>
  );
};
