import { EntityItem } from "@/components/entities";
import { FC } from "react";

type Props = {
  userId: number;
  name: string;
};

export const User: FC<Props> = ({ userId, name }) => {
  return (
    <EntityItem
      userId={userId}
      name={name}
      onClick={() => document.getElementById("user_modal")?.showModal()}
    />
  );
};
