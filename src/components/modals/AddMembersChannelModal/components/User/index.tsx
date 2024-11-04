import { EntityItem } from "@/components/entities";
import { Button } from "@/components/ui";
import { useUpdateChannelMutation } from "@/shared/store/api";
import { FC, useEffect } from "react";
import { toast } from "react-toastify";

type Props = {
  userId: number;
  name: string;
  channelId: number;
  channelMembers: number[];
};

export const User: FC<Props> = ({
  userId,
  name,
  channelId,
  channelMembers,
}) => {
  const [updateChannel, { data, error, isLoading }] =
    useUpdateChannelMutation();

  const getButtonText = () => {
    if (isLoading) {
      return "Loading...";
    }

    if (data) {
      return "Отправлено";
    }

    return "Пригласить в канал";
  };

  const inviteHandler = () => {
    if (channelMembers.find((memberId) => memberId === userId))
      return toast.error("Пользователь уже в канале");

    updateChannel({
      id: channelId,
      members: [...channelMembers, userId],
    });
  };

  useEffect(() => {
    if (!data) return;

    toast.success("Приглашение отправлено!");
  }, [data]);

  useEffect(() => {
    if (!error) return;

    toast.error("Ошибка");
  }, [error]);

  return (
    <EntityItem
      userId={userId}
      name={name}
      control={
        <Button className="w-max" sizes="small" onClick={inviteHandler}>
          {getButtonText()}
        </Button>
      }
    />
  );
};
