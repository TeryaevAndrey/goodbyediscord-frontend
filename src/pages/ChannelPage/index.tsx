import { ChannelScreen } from "@/screens";
import { DrawersContextProvider } from "./shared/contexts";

export const ChannelPage = () => {
  return (
    <DrawersContextProvider>
      <ChannelScreen />
    </DrawersContextProvider>
  );
};
