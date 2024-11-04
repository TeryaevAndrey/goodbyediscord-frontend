import { FC, useContext } from "react";
import styles from "./styles.module.scss";
import { cn } from "@/shared/utils";
import { PropsWithClassName } from "@/shared/types";

import { ChannelContext } from "@/pages/ChannelPage/shared/contexts";
import { User } from "@/components/ui";

export const Users: FC<PropsWithClassName> = ({ className }) => {
  const { channelData } = useContext(ChannelContext);

  return (
    <div className={cn(styles.root, className)}>
      {channelData?.members.map((user) => (
        <User
          key={user.id}
          variant="pointer"
          sizes="small"
          userId={user.id}
          name={user.username}
          onClick={() => document.getElementById("user_modal")?.showModal()}
        />
      ))}
    </div>
  );
};
