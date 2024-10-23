import { Channel } from "@/components/entities";
import { Button } from "@/components/ui";
import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";
import { FC } from "react";
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Channels: FC<MainComponentProps> = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div className={cn("flex flex-col", className)}>
      <Button
        variant="transparent"
        mode="square"
        onClick={() => navigate("/channel/123")}
      >
        <Channel />
      </Button>
      <Button variant="transparent" mode="square">
        <Channel />
      </Button>
      <Button variant="transparent" mode="square">
        <Channel />
      </Button>
      <Button variant="transparent" mode="square">
        <Channel />
      </Button>
      <Button variant="transparent" mode="square">
        <Channel />
      </Button>
      <Button variant="transparent" mode="square">
        <Channel />
      </Button>
      <Button variant="transparent" mode="square">
        <Channel />
      </Button>

      <Button
        variant="transparent"
        mode="square"
        onClick={() =>
          document.getElementById("add_channel_modal")?.showModal()
        }
      >
        <IoIosAdd className="fill-base-content" size={28} />
      </Button>
    </div>
  );
};
