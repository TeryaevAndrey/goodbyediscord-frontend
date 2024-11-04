import { ChannelScreen } from "@/screens";
import {
  ChannelContextProvider,
  DrawersContextProvider,
} from "./shared/contexts";

export const ChannelPage = () => {
  return (
    <ChannelContextProvider>
      <DrawersContextProvider>
        <ChannelScreen />
      </DrawersContextProvider>
    </ChannelContextProvider>
  );
};
