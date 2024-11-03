import { EntityItem } from "@/components/entities";
import { Button } from "@/components/ui";
import { useInviteFriendshipMutation } from "@/shared/store/api";
import { FC, useEffect } from "react";
import { toast } from "react-toastify";

type Props = {
  id: number;
  name: string;
};

export const User: FC<Props> = ({ id, name }) => {
  const [invite, { data: inviteData, error: inviteError }] =
    useInviteFriendshipMutation();

  const inviteHandler = () => {
    invite({ user_to: id });
  };

  useEffect(() => {
    if (!inviteData) return;

    toast.success("Приглашение отправлено!");
  }, [inviteData]);

  useEffect(() => {
    if (!inviteError) return;

    toast.error("Ошибка");
  }, [inviteError]);

  return (
    <EntityItem
      userId={id}
      name={name}
      control={
        <Button className="w-max" sizes="small" onClick={() => inviteHandler()}>
          Добавить в друзья
        </Button>
      }
    />
  );
};
