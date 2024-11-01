import { Channel } from "@/components/entities";
import { Button } from "@/components/ui";
import { useGetUserChannelsQuery } from "@/shared/store/api";
import { MainComponentProps } from "@/shared/types";
import { cn } from "@/shared/utils";
import { FC } from "react";
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Channels: FC<MainComponentProps> = ({ className }) => {
  const navigate = useNavigate();
  const { data: channels } = useGetUserChannelsQuery(null);

  const goToChannelPage = (id: number) => {
    navigate(`/channels/${id}`);
  };

  return (
    <div className={cn("flex flex-col", className)}>
      {channels?.map((channel) => (
        <Button
          variant="transparent"
          mode="square"
          onClick={() => goToChannelPage(channel.id)}
          title={channel.name}
        >
          <Channel avatarUrl={channel.avatar_url} name={channel.name} />
        </Button>
      ))}

      <Button
        variant="transparent"
        mode="square"
        onClick={() =>
          document.getElementById("add_channel_modal")?.showModal()
        }
        title="Create channel"
      >
        <IoIosAdd className="fill-base-content" size={28} />
      </Button>
    </div>
  );
};
