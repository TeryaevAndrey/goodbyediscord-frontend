import { FC } from "react";
import { Drawer } from "../Drawer";
import { DrawerProps } from "@/shared/types";
import {
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "../Drawer/components";
import { Users } from "./components";

export const ChannelUsersDrawer: FC<DrawerProps> = ({ isOpen, close }) => {
  return (
    <Drawer type="fixed" isOpen={isOpen}>
      <DrawerHeader>
        <DrawerTitle>Users</DrawerTitle>

        <DrawerClose onClick={close} />
      </DrawerHeader>

      <DrawerContent>
        <Users />
      </DrawerContent>
    </Drawer>
  );
};
