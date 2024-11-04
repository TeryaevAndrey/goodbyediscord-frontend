import { FC, useContext } from "react";
import { Drawer } from "../Drawer";
import { DrawerProps, useAppDispatch } from "@/shared/types";
import {
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "../Drawer/components";
import { Users } from "./components";
import { ChannelContext } from "@/pages/ChannelPage/shared/contexts";
import { User } from "@/components/ui";
import { setOpenedUser } from "@/shared/store/slices";

export const ChannelUsersDrawer: FC<DrawerProps> = ({ isOpen, close }) => {
  const { channelData } = useContext(ChannelContext);
  const dispatch = useAppDispatch();

  return (
    <Drawer type="fixed" isOpen={isOpen}>
      <DrawerHeader>
        <DrawerTitle>Users</DrawerTitle>

        <DrawerClose onClick={close} />
      </DrawerHeader>

      <DrawerContent>
        <div className="flex flex-col">
          <p>Admin:</p>
          <div className="flex flex-col gap-2 mt-4">
            {channelData && (
              <User
                variant="pointer"
                sizes="small"
                userId={channelData.channel_owner.id}
                name={channelData.channel_owner.username}
                onClick={() => {
                  document.getElementById("user_modal")?.showModal();

                  dispatch(setOpenedUser(channelData.channel_owner));
                }}
              />
            )}
          </div>
        </div>

        <Users />
      </DrawerContent>
    </Drawer>
  );
};
