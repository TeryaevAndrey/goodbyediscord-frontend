import { ChannelUsersDrawer } from "@/components/drawers";
import { ChannelLayout } from "@/components/layout";
import { DrawersContext } from "@/pages/ChannelPage/shared/contexts";
import { useContext } from "react";

export const ChannelScreen = () => {
  const { isOpenUsersDrawer, setOpenUsersDrawer } = useContext(DrawersContext);

  return (
    <ChannelLayout>
      <div></div>

      <ChannelUsersDrawer
        isOpen={isOpenUsersDrawer}
        close={() => setOpenUsersDrawer(false)}
      />
    </ChannelLayout>
  );
};
